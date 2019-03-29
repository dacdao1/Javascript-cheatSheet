# My JavaScript cheat sheet and what I think is important

JavaScript uses the V8 engine to translate the JavaScript code into the browser.

ECMAscript help create laws and rules that most engineer have to follow, in order to create their own JavaScript engine.
The process of passing the JS file through the V8 engine.

Parser (make the code into a token) -> AST (Abstract Syntax tree) -> Interpreter -> Bytecode
                                                                                 -> Profiler -> Compiler -> Optimized Code

Interpreter and Compiler for JavaScript

- Interpreter will read each line of codes, line by line, to understand what each set of codes are doing. It is read as the codes are compile. BYTECODE
- Compiler will go through the codes and change it to a lower level language so that system will understand the code. MACHINE CODE.

## lesson1.js codes

PART 1: contain the example of how to create the regex of a string and from that point on, I can create a JavaScript engine to interpret the JavaScript codes.
