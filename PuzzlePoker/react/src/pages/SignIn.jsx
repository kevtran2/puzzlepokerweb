import { auth } from "../utils/firebase";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { getDocs, query, collection, where } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

const db = getFirestore();

function SignIn() {
    const { currentUser } = useAuth();
    const [userName, setUserName] = useState('');
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [signInError, setSignInError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    const validateUsername = async (username) => {
        try {
            // Check if username already exists
            const usernameQuery = await getDocs(
                query(collection(db, "users"), where("username", "==", username))
            );

            return usernameQuery.empty; // returns true if username is available
        } catch (error) {
            console.error("Error checking username:", error);
            return false;
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validate password
            if (registerPassword.length < 6) {
                setRegisterError('Password must be at least 6 characters long');
                return;
            }

            // Validate username
            if (!userName || userName.length < 3) {
                setRegisterError('Username must be at least 3 characters long');
                return;
            }

            // Check if username is available
            const isUsernameAvailable = await validateUsername(userName);
            if (!isUsernameAvailable) {
                setRegisterError('Username is already taken');
                return;
            }

            // Create auth account and user document
            const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                username: userName,
                email: registerEmail,
                createdAt: new Date().toISOString(),
            });

            console.log('User created successfully:', user.email);
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setRegisterError('This email is already registered');
                    break;
                case 'auth/invalid-email':
                    setRegisterError('Invalid email address');
                    break;
                case 'auth/operation-not-allowed':
                    setRegisterError('Email/password accounts are not enabled. Please enable them in Firebase Console');
                    break;
                case 'auth/weak-password':
                    setRegisterError('Password is too weak');
                    break;
                default:
                    setRegisterError(error.message);
            }
            console.error('Error:', error.code, error.message);
        }
    };

    const clearAllStates = () => {
        setSignInEmail('');
        setSignInPassword('');
        setRegisterEmail('');
        setRegisterPassword('');
        setSignInError('');
        setRegisterError('');
        setUserName('');
        setIsSignedIn(false);
    };

    const signInUser = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in successfully:', email);
            setIsSignedIn(true);
        } catch (error) {
            setSignInError(error.message);
        }
    };

    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        await signInUser(signInEmail, signInPassword);
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    }

    return (
        <div>
            {!currentUser ? (
                <>
                    <h1>Sign In</h1>
                    {signInError && <div style={{ color: 'red' }}>{signInError}</div>}
                    <form onSubmit={handleSignInSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={signInEmail}
                            onChange={(e) => setSignInEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signInPassword}
                            onChange={(e) => setSignInPassword(e.target.value)}
                        />
                        <button type="submit">Sign In</button>
                    </form>
                    <h1> Register</h1>
                    {registerError && <div style={{ color: 'red' }}>{registerError}</div>}
                    <form onSubmit={handleRegisterSubmit}>
                        <input
                            placeholder="Username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                        <button type="submit">Sign Up</button>
                    </form>
                </>
            ) : (
                <>
                    <h1>You are Signed In</h1>
                    <button onClick={handleSignOut}>Sign Out</button>
                </>
            )}
        </div>
    );
}

export default SignIn;