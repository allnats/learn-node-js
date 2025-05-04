# 02 Module System

Exploring the various modules provided by `Node.js`.

- You can view the all of the available modules via the [documentation page](https://nodejs.org/docs/latest/api/).
- Module methods is usually divided into **synchronous** and **asynchronous.**
(or *Callbacks*)


## Two types of Module Systems in `Node.js`

1. **CommonJS Module**
2. **ECMAScript Modules (or ES Modules)**

### CommonJS Module

[CommonJS Module Documentation](https://nodejs.org/docs/latest/api/modules.html)

CommonJS Modules: This is the original module system used in Node.js.
It uses the `require()` function to `import` modules and `module.exports` or
`exports` to export them. Your code `const fs = require("fs")` is using the
CommonJS syntax to import the built-in Node.js file system module (fs).
CommonJS modules are loaded synchronously.

```javascript
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```


### ECMAScript Module

[ECMAScript Module Documentation](https://nodejs.org/docs/latest/api/esm.html)

This is the official, standardized module system for JavaScript,
introduced in ES6 (ECMAScript 2015). It uses the `import` statement to import
modules and the `export` statement to export them. ES Modules are designed to be
more flexible and are loaded asynchronously, which can be beneficial,
especially in browser environments (though Node.js also supports them).


```javascript
// app.mjs
import { addTwo } from './addTwo.mjs';

// Prints: 6
console.log(addTwo(4));
```

## File System Module

Importing using the CommonJS Module:

```javascript
const fs = require("fs")
```

Importing using the ES Module:

```javascript
import fs from "node:fs";
// Or like this
import * as fs from 'node:fs';
```

You can also import specific functions from the fs module using named imports
if you only need certain parts:

```typescript
import { readFileSync, writeFileSync } from 'node:fs';

const data = readFileSync('my-file.txt', 'utf8');
writeFileSync('another-file.txt', data);
```


**Methods**

- Writing to a file synchronously
  - `fs.writeFileSync('notes.txt', 'Your message here');`
- Appending to data to a file synchronously
  - `fs.appendFileSync('notes.txt', 'Additional message here');`