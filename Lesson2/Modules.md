Modules
JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

ES Modules rely on the `import` and `export` statements.

Export
You can export a function or variable from any file.

person.js
export const name = "Tobias"
export const age = 18

person.js
const name = "Tobias"
const age = 18

export { name, age }

Default Exports

message.js
const message = () => {
const name = "Tobias";
const age = 18;
return name + ' is ' + age + 'years old.';
};

export default message;

Import
import { name, age } from './person.js';

import message from './message.js';
