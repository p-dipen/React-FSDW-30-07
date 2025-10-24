The map() Method
The map() method creates a new array with the results of calling a function for every array element.

Example
Multiply each number by 2:

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x \* 2);

map() Parameters
The map() method takes three parameters:

currentValue - The current element being processed
index - The index of the current element (optional)
array - The array that map was called upon (optional)

```import React from 'react';
const fruitlist = ['apple', 'banana', 'cherry'];

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

function UserList() {
  return (<ul>
    {users.map(user => <li key={user.id}>
      {user.name} is {user.age} years old
      </li>
    )}
  </ul>)
}

export function App() {
  return (
    <div>
    <h3>User List</h3>
    <UserList />
    <h3>Fruit List</h3>
     <ul>{fruitlist.map((fruit, index, array) =>
  <li key={fruit}>Item: {fruit}, Index: {index}, Array: {array}</li>)}</ul>
  </div>
  );
}
```
