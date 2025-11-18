# React Router
Application responds to different URLs or paths requested by a client. 

localhost:3005/about -> 
localhost:3005/home -> 

React Router is a library that provides routing capabilities for React Applications.

Routing means handling navigation between different views.

React Router is the standard routing library for React applications. It enables you to 

- Create multiple pages in your single-page application
- Handle URL parameters and query strings
- Manage browser history and navigation
- Create nested routes and layouts
- Implement protected routes for authentication

## How to install React Router

```
npm install react-router-dom
```

Your application must be wrapped with the `BrowserRouter` Component to enable routing.

```javascript
function App() {
    return (
        <BrowserRouter>
            {/* Your App Content */}
        </BrowserRouter>

    )
}
```

## Basic Routing
React Router uses three main components for basic routing:

- Link: Creates navigation links that update the URL
- Routes: A container for all your route definitions
- Route: Defines a mapping between a URL path and a component


## Nested Routes

You can have a `Route` inside another Route, this called a nested routes.
Nested routes allow you change parts of the page when you navigate to a new URL, while other parts is not changed or reloaded, almost like having a page within a page.

Let's use the example above, and add two new components that will be rendered inside the `Products` component.

One called `CarProducts` and one called `BikeProducts`:


Important notes about the example above:

Outlet:
The `<Outlet />` element in the `Products` component specifies where to render the child route's content.
Routes:
The `Routes` element contains the routes to `CarProducts` and `BikeProducts` as child routes of the `Products` parent route.
URL Structure:
The URL structure is relative to the parent route's path. For example:
When you navigate to `'/products/car'`, the `CarProducts` component is rendered.
When you navigate to `'/products/bike'`, the `BikeProducts` component is rendered.