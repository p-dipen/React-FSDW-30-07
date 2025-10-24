Introduction to ES6 (Ecmascript 2015) - Advanced Javascript

React uses ES6, and you should be familiar with some of the new features like:
Classes
Arrow Functions
Variables (let, const, var)
Array Methods like .map()
Destructuring
Modules
Ternary Operator
Spread Operator

Ternary Operator
The ternary operator is a simplified conditional operator like if / else.

Syntax: condition ? <expression if true> : <expression if false>

Here is an example using if / else:

Example
Before:

if (authenticated) {
renderApp();
} else {
renderLogin();
}

After

authenticated ? renderApp() : renderLogin()

Template Strings

Before:

const name = "John";
const age = 30;
const message = "Hello, " + name + "!\n" +
"You are " + age + " years old.";

After
const name = "John";
const age = 30;
let total = `Total: ${price * quantity}`;

const message = `Hello, ${name}!
You are ${age} years old.`;

const items = ["apple", "banana", "orange"];
const list = `You have ${items.length} items:
${items.map(item => `- ${item}`).join('\n')}`;
