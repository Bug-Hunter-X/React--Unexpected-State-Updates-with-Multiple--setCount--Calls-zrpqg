# React Unexpected State Updates
This repository demonstrates a common error in React applications where multiple state updates in quick succession lead to unexpected behavior. The issue stems from React's state update batching optimization.  When `setCount` is called multiple times within a single event, React might only process the final update, ignoring intermediate ones.  This can result in unexpected counts or other side effects.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Click the 'Increment' button. Observe that the count doesn't increment by two; only the final value is processed.

## Solution
The solution involves using functional updates or preventing multiple updates by refactoring the increment logic, making sure that state updates are processed correctly, as demonstrated in `bugSolution.js`.