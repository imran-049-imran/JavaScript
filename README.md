# JavaScript

JavaScript is the backbone of modern web development — it’s what makes websites interactive instead of just static pages. Here’s a quick breakdown of the essentials:

🔑 Core Concepts
Variables: Store values for reuse (let, const, var).

Data Types: Numbers, strings, booleans, objects, arrays.

Operators: Arithmetic (+, -), comparison (==, ===), logical (&&, ||).

Control Flow: if/else, switch, loops (for, while).

Functions: Reusable blocks of code, can be declared or expressed as arrow functions.

Objects & Arrays: Structures to organize and manipulate data.

Events: Respond to user actions like clicks, keypresses, or form submissions.

⚡ Why It’s Powerful
Runs client-side in the browser for instant interactivity.

Can also run server-side with Node.js.

Huge ecosystem of frameworks (React, Angular, Vue) and libraries.

🖥️ Example
Here’s a simple snippet to show how JavaScript works:

javascript
// Display current time when button is clicked
function showTime() {
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleTimeString();
}
With this, clicking a button could instantly show the current time on a webpage.

```
📂 JavaScript Repo Structure

javascript-project/
│
├── src/
│   ├── index.js        # Main entry point
│   ├── utils.js        # Utility/helper functions
│   └── api.js          # Example API calls
│
├── tests/
│   └── utils.test.js   # Unit tests for utils
│
├── package.json        # Project metadata & dependencies
├── .gitignore          # Ignore node_modules, logs, etc.
├── README.md           # Documentation for your repo
└── LICENSE             # License file (MIT by default)

```
```
Example Files

src/index.js
javascript
import { greet } from "./utils.js";

function main() {
  console.log(greet("Imran"));
}
```
```
main();
src/utils.js
javascript
export function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript repo.`;
}

```
```
export function add(a, b) {
  return a + b;
}
```
```
tests/utils.test.js
javascript
import { add } from "../src/utils.js";

```
```
console.assert(add(2, 3) === 5, "Add function failed!");
console.log("All tests passed");
```
```
package.json
json
{
  "name": "javascript-project",
  "version": "1.0.0",
  "description": "A starter JavaScript repo",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "node tests/utils.test.js"
  },
```
```
  "author": "Imran",
  "license": "MIT"
```
