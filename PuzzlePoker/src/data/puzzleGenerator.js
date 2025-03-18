// Poker Game Constants
const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const POSITIONS = ['BTN', 'SB', 'BB', 'UTG', 'MP', 'CO'];
const STREETS = ['preflop', 'flop', 'turn', 'river'];

// Previous HandEvaluator and GTOSolver classes remain the same ...

class PuzzleGenerator {
    static generatePuzzle(street = null) {
        // If street is not specified, randomly choose one
        const targetStreet = street || STREETS[Math.floor(Math.random() * STREETS.length)];
        
        switch(targetStreet) {
            case 'preflop':
                return this.generatePreflopPuzzle();
            case 'flop':
                return this.generateFlopPuzzle();
            case 'turn':
                return this.generateTurnPuzzle();
            case 'river':
                return this.generateRiverPuzzle();
            default:
                throw new Error('Invalid street specified');
        }
    }

    static generatePreflopPuzzle() {
        const holeCards = this.dealCards(2);
        const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
        const stackSize = Math.floor(Math.random() * 200) * 10;
        const potSize = Math.floor(Math.random() * 10) * 2; // Small pot preflop

        const gameState = {
            street: 'preflop',
            holeCards,
            communityCards: [],
            position,
            potSize,
            stackSize,
            action: this.generatePreFlopAction()
        };

        return this.createPuzzleObject(gameState);
    }

    static generateFlopPuzzle() {
        const holeCards = this.dealCards(2);
        const communityCards = this.dealCards(3);
        const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
        const stackSize = Math.floor(Math.random() * 200) * 10;
        const potSize = Math.floor(Math.random() * 50) * 10;

        const gameState = {
            street: 'flop',
            holeCards,
            communityCards,
            position,
            potSize,
            stackSize,
            action: this.generatePostFlopAction()
        };

        return this.createPuzzleObject(gameState);
    }

    static generateTurnPuzzle() {
        const holeCards = this.dealCards(2);
        const communityCards = this.dealCards(4);
        const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
        const stackSize = Math.floor(Math.random() * 200) * 10;
        const potSize = Math.floor(Math.random() * 100) * 10;

        const gameState = {
            street: 'turn',
            holeCards,
            communityCards,
            position,
            potSize,
            stackSize,
            action: this.generatePostFlopAction()
        };

        return this.createPuzzleObject(gameState);
    }

    static generateRiverPuzzle() {
        const holeCards = this.dealCards(2);
        const communityCards = this.dealCards(5);
        const position = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];
        const stackSize = Math.floor(Math.random() * 200) * 10;
        const potSize = Math.floor(Math.random() * 150) * 10;

        const gameState = {
            street: 'river',
            holeCards,
            communityCards,
            position,
            potSize,
            stackSize,
            action: this.generatePostFlopAction()
        };

        return this.createPuzzleObject(gameState);
    }

    static generatePreFlopAction() {
        return {
            actionType: 'raise',
            previousAction: Math.random() > 0.5 ? 'raise' : 'call',
            betSize: Math.floor(Math.random() * 5) * 2 // 2-10BB
        };
    }

    static generatePostFlopAction() {
        const actionTypes = ['check', 'bet', 'raise', 'call'];
        return {
            actionType: actionTypes[Math.floor(Math.random() * actionTypes.length)],
            previousAction: actionTypes[Math.floor(Math.random() * actionTypes.length)],
            betSize: Math.floor(Math.random() * 100) * 5
        };
    }

    static createPuzzleObject(gameState) {
        const solution = GTOSolver.calculateOptimalStrategy(gameState);
        const difficulty = this.calculateDifficulty(gameState);

        return {
            id: Math.random().toString(36).substr(2, 9),
            type: 'poker_puzzle',
            difficulty,
            street: gameState.street,
            scenario: {
                ...gameState,
                betSizing: this.suggestBetSizing(gameState)
            },
            solution: {
                action: solution,
                explanation: this.generateDetailedExplanation(gameState, solution),
                equityAnalysis: this.generateEquityAnalysis(gameState)
            }
        };
    }

    static suggestBetSizing(gameState) {
        const { potSize, street } = gameState;
        return {
            minBet: Math.floor(potSize * 0.5),
            pot: potSize,
            maxBet: Math.floor(potSize * 2),
            recommendedSizes: [
                Math.floor(potSize * 0.5),  // Half pot
                potSize,                    // Pot sized
                Math.floor(potSize * 1.5),  // 1.5x pot
                Math.floor(potSize * 2)     // 2x pot
            ]
        };
    }

    static generateDetailedExplanation(gameState, solution) {
        const { street, position, potSize, action } = gameState;
        let explanation = `On the ${street} in position ${position} with pot size ${potSize}, `;
        explanation += `facing a ${action.actionType} of ${action.betSize}, `;
        explanation += `the optimal play is to ${solution}. `;
        
        // Add street-specific reasoning
        switch(street) {
            case 'preflop':
                explanation += 'Consider position and stack depth for preflop play.';
                break;
            case 'flop':
                explanation += 'Evaluate board texture and potential draws.';
                break;
            case 'turn':
                explanation += 'Consider pot commitment and updated ranges.';
                break;
            case 'river':
                explanation += 'Focus on value betting and bluff catching.';
                break;
        }

        return explanation;
    }

    static generateEquityAnalysis(gameState) {
        const handStrength = HandEvaluator.evaluateHand(gameState.holeCards, gameState.communityCards);
        return {
            equity: Math.random(),  // Placeholder for actual equity calculation
            potOdds: GTOSolver.calculatePotOdds(gameState.potSize, gameState.stackSize),
            handCategory: handStrength.category,
            handScore: handStrength.score
        };
    }

    // Previous helper methods remain the same...
}

module.exports = {
    HandEvaluator,
    GTOSolver,
    PuzzleGenerator
};