# My JavaScript cheat sheet and what I think is important

JavaScript uses the V8 engine to translate the JavaScript code into the browser.

ECMAScript help create laws and rules that most engineer have to follow, in order to create their own JavaScript engine.
The process of passing the JS file through the V8 engine.

JavaScript is an interpreted language but based on the implementation, it could be different.

Parser (make the code into a token) -> AST (Abstract Syntax tree) -> Interpreter -> Bytecode
                                                                                 -> Profiler -> Compiler -> Optimized Code

Interpreter and Compiler for JavaScript

- Interpreter will read each line of codes, line by line, to understand what each set of codes are doing. It is read as the codes are compile. BYTECODE. Interpreter is easy to start quickly. It can read each line quickly and easily. Help execute JavaScript right away.
- Compiler will go through the codes and change it to a lower level language so that system will understand the code. MACHINE CODE.

- Interpreter are easy to set up and but hard to optimized while compiler will take forever to load but will be easier to work with it in the long term.

- JIT compiler : just in time complier. Adding some of elements of both interpreter and compiler.

BABEL and Typescript

- Babel is a JavaScript compiler that takes your modern JS code and returns  browser compatible JS.
- Typescript is a superset of JavaScript that compiles down to JavaScript.

## lesson1.js codes

PART 1: contain the example of how to create the regex of a string and from that point on, I can create a JavaScript engine to interpret the JavaScript codes.

## Optimized JavaScript - lesson2.js codes

Try not to use or be careful of.

- eval() : function that call the eval() function.
- arguments : within function.
- for in : looping over object. Rather use object.key is better.
- with
- delete
- hidden classes : classes that are well define with a certain pattern of parameters. If those patterns are being "deleted" or manipulated, then the set of codes will be slow down or the application itself will be slow down.

## Call Stack and Memory Heap - lesson3.js codes

- Memory heap to store and write information and allocate memory.

- Call stack help keep track of the codes and where we are in the codes to execute that set of codes. Last in - First out mode.

- JavaScript automatically clean up data or objects that we are not using anymore. Clean up unused data. JavaScript uses garbage collection. Mark and sweep algorithm. The algorithm will  mark what variable that pointed to an objects and keep them in the memory while sweep will delete any objects that are not connected to any variable within the memory heap.
