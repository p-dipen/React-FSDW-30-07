# Styling React Using CSS
There are many ways to style React with CSS

- Inline style 
- CSS stylesheets
- CSS modules 

## Inline Styles 
To style an element with the inline style attribute, the value must be a Javascript Object:

```javascript 
const Header = () => {
  return (
    <>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```
Note: In jsx, js expressions are written inside curly braces, and since Javascript objects also use curly braces, the styling in the example above is written two sets of curly braces `{{}}`

### camelCased Property Name
Since the inline CSS is written in  a javscript object, properties with hyphen separators, like `background-color`, must be written with camel case syntax:
Use backgroundColor instead of background-color:
```javascript
const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```

Javascript object 
Create a style object named myStyle:
```javascript
const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```

## CSS Modules

Another way of adding style to your application is to use CSS Modules. 

CSS modules are convenient for components that are placed in separate files. 

Create the CSS module with the `.module.css` extension example: my-style.module.css

Create a new file caleed `my-style.module.css` extension, example: 
#### my-style.module.css
```css 
.bigred {
  color: Tomato;
  padding: 40px;
  font-family: Sans-Serif;
  text-align: center;
}
#specialButton {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}
```
import the stylesheet in your component

#### index.jsx
```javascript
import { createRoot } from 'react-dom/client';
import styles from './my-style.module.css';

const Car = () => {
    return <div>
        <h1 className={styles.bigred}> Hello Car!</h1>
        <h2 id={styles.specialButton}> Hello H2!</h2>
    </div>
}

createRoot(document.getElementById('root')).render(
    <Car />
)
```
