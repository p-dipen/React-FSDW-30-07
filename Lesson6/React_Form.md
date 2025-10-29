# React Form 

### Adding Forms in React

```javascript
function MyForm() {
    return (
        <form>
            <label> Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}
```

This will work as normal, the form will submit and the page will refresh.

But this is generally not what we want to happen in React.

We want to prevent this default behavior and let React control the form.

## HTML Forms vs. React Forms 

In react, form elements like `<input>`, `<textarea>` and `<select>` work a bit different.

## Controlled Components
In a controlled component, form data is handled by the React Component. 
When the data is handled by the components, all the data is stored in the component state.

We can use the `useState` Hook to keep track of each input value and provide a "single source of truth" for the entire application.