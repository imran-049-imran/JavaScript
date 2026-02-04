# JavaScript

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
