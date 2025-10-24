React props

Props are arguments passed into React components
Props are passed to component via html attributes.

`props` stands for properties

React props are like function arguments in JavaScript and Attributes in HTML.
To send props in a component, use the same syntax as HTML attributes:

createRoot(document.getElementById('root')).render(<Car brand="ford" />)

function Car(props) {
return <h2>I am a {props.brand}!</h2>
}

createRoot(document.getElementById('root')).render(<Car brand="ford" model="mustang" color="red" engine={5} />)

function Car(props) {
return (
<h2> I am a {props.color} {props.brand} {props.model}!</h2>
)
}

Different Data Types including variables, numbers, strings, objects, arrays and more.

String can be send inside quotes as in the example above, but numbers, variables and objects need to be sent inside curly brackets

function Car({color, brand, model}) {
return (
<h2> I am a {color} {brand} {model}!</h2>
)
}
