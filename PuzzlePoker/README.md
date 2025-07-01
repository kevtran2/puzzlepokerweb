# PuzzlePoker: An app designed to change the way we train and play poker.  

Learning and playing the game of poker can be overwhelming. 

There are a lot of training resources and apps where you can play poker, however, it is often cluttered with casino-like gimics, aggressive monetization, and difficult to navigate UI.

The mission of PuzzlePoker is to give players of all levels an organized platform to train, think, and play poker with  
their friends and the online community. PuzzlePoker aims to unite AI with GTO (Game Theory Optimal) solvers like  
GTOWizard to make studying the game accessible for even a beginner.

# Technical Decisions: How the platform is being designed

## Tech Stack

- React
- Vite
- TailwindCSS
- ESLint
- Javascript

Currently, PuzzlePoker is being run by a solo dev, me! With this in mind, the decision to use React + Vite + TailwindCSS was to simplify the web application building process to iterate and build quickly. Although TypeScript does offer type safety and would be the preferred language, I wanted to focus on building up my comfort using JavaScript as I am newer to the web programming languages and many things nowadays are in JavaScript or TypeScript. 

With regards to the design of the platform itself, currently I only have the first iteration of the puzzle training feature complete. There are many things I still want to add and am still working on, but for now(as of July 1st, 2025) we only have the puzzle feature. The puzzle feature loads a bunch of puzzles from a json file and uploads each puzzle one by one on the poker table. To the right of a table, are 4 multiple choice options for the user to decide what the best move in each position is, including a hint button. 

# How to run the web application

To start server: 
"npm run dev" in the react directory

Visit the web page where it is hosted, for example: http://localhost:5173/

We hope to have the site hosted publicly in a couple weeks once the MVP is complete.

# Features coming to PuzzlePoker: Learn more about our progress and plans

- Add correct answer count
- Add info/vocab button with initial tutorial pop-up
- Add more puzzle problems
- Add login for progress saving
- Add ask AI(maybe limit tokens, make paid users to have access to AI coach)
- Add reference to GTO play. How does the suggested answer differ from what is GTO optimal? What type of exploit is it going for? Utilize LLMs to explain what is going on.
- Add past pros moves problem set
- Users have money for games, earn money by logging in daily, can lose and be unable to play, richest player leaderboard

# The following is a list of poker terms that may need to be added to the site for users to view to define terminology they may not be familiar with.

- Stab: In poker, "stab" refers to making a bet or continuation bet (c-bet) on the flop after having raised preflop, especially when it's a bet designed to take down the pot uncontested, rather than a bet made for value. It often implies a semi-bluff or bluff, aiming to capitalize on opponents' perceived weakness or lack of interest in the pot. 
- Fish: a player who is weak
- Reg: a regular, often meaning this player is experience playing poker