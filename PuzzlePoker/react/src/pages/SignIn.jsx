import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleCreateUser = async (email, password) => {
        try {
            if (password.length < 6) {
                setError('Password must be at least 6 characters long');
                return;
            }

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User created successfully:', user.email);
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setError('This email is already registered');
                    break;
                case 'auth/invalid-email':
                    setError('Invalid email address');
                    break;
                case 'auth/operation-not-allowed':
                    setError('Email/password accounts are not enabled. Please enable them in Firebase Console');
                    break;
                case 'auth/weak-password':
                    setError('Password is too weak');
                    break;
                default:
                    setError(error.message);
            }
            console.error('Error:', error.code, error.message);
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => handleCreateUser(email, password)}>Sign In</button>
        </div>
    );
}

export default SignIn;