# React Attributes

JSX allows you to insert attributes into HTML elements, but there are few important differences.

HTML
```html
<h1 class="highlight">THis is title</h1>
```
React
class == className
```html
<h1 className="highlight">This is title</h1>
```

## Expressions as Attributes 
```javascript
function Car(){
    const x = "myclass";
    return (
        <h1 className={x}>This is title</h1>
    )
}
```

## camelCase Event Attributes
HTML
```html
<button onclik="myfunc">Submit</button>
```
React
```javascript
function Car(){
    const myfunc = () => {
        alert('Hello world');
    }
    return (
       <button onClick={myfunc}>Submit</button>
    )
}
```

## Boolean Attributes 
if you pass no value for an attributes, JSX treats it as TRUE. To pass false, you must specify it as an express. 

```html
<button onClick={myfunc} disabled>Click me</button>
```

```html
<button onClick={myfunc} disabled={true}>Click me</button>
```

```html
<button onClick={myfunc} disabled={false}>Click me</button>
```
```javascript
function Car(){
    const x = false;
    const myfunc = () => {
        return false
    }
    return (
       <button onClick={myfunc} disabled={x}>Submit</button>
    )
}
```

## Style Attributes 
inline-style
```javascript
function Car() {
    const mystyles = {
        color: "red",
        fontSize: "20px",
        backgroundColor: "lightyellow",
    };
    return (
        <h1 style={mystyles}>My Car</h1>
    )
}
```
```javascript
function Car() {
    const myclass = "myclassName";
    return (
        <h1 className={myclass}>My Car</h1>
    )
}
```

# React IF Statements 
Conditions - if statements 
React supports `if` statements, but not inside JSX
- Option 1:
  With if statement outside of the JSX code:
  ```javascript
  function Fruit() {
    const x = 5;
    let y = "Apple";
    if(x < 10) {
        y = "Banana";
    }
    return (
        <h1> {y} </h1>
    )
  }
  ```
- Option 2:
  Use `Ternary Expressions` instead:
  ```javascript
  function Fruit() {
    const x = 5;
    return (
        <h1>{(x) < 10 ? 'Banana' : 'Apple'}</h1>
    )
  }
  ```