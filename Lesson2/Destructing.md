Destructuring in React
Destructuring is a JavaScript feature that allows you to extract values from objects or arrays into distinct variables. In React, it's commonly used with props, hooks, and state management.

Destructuring Arrays
Array destructuring extracts values based on their position (order matters) and assigns them to variables.

````import "./styles.css";
import React from "react";
const vehicles = ["mustang", "f-150", "expedition"];
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  country: "gremany",
  car: {
    brand: "Ford",
    model: vehicles[0],
  },
};

function Greeting({ props: { firstName, lastName, age, country } }) {
  // ÷le.log(props);
  return (
    <h2>
      Hello {firstName} {lastName} of {age} from {country}
    </h2>
  );
}

function dateInfo(dat) {
  const d = dat.getDate();
  const m = dat.getMonth() + 1;
  const y = dat.getFullYear();
  return [d, m, y];
}
export default function App() {
  const [, truck] = vehicles;
  const [date, month, year] = dateInfo(new Date());
  const {
    age,
    firstName,
    lastName,
    country = "NoCountry",
    car: { brand, model },
  } = person;
  return (
    <div>
      <Greeting props={{ firstName, lastName, age, country }} />
      <h3>
        He like to ride {brand}-{model}
      </h3>
      Current Date: {date}-{month}-{year}
    </div>
  );
}```

````
