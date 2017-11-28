# Rendering Multiple Components

**Every single component can only return one parent element**. This means you **CANNOT** do this:

```js
var exampleComponent = ReactDOM.createClass({
    render: function () {
        return {
            <h2>This is one parent element</h2>
            <p>THIS IS A SECOND PARENT ELEMENT AND WILL CAUSE ERRORS!</p>
        }
    }
});
```

To get around this, we can wrap all of the elements we want to put in our component into a *single parent div* like this:

```js
var ExampleComponent = React.createClass({
    render: function () {
        return {
            <div id="ParentDiv">
                <h2>This is the first child of the parent div</h2>
                <p>This is the second child of the parent div</p>
            </div>
        }
    }
});

ReactDOM.render(<ExampleComponent />, document.getElementById('example'));
```

Whenever you make a component, make sure you only return a single parent div to avoid errors

The **ReactDOM.render()** method we use to put our generated react code onto our webpage can only take a single component. To put multiple components into our **ReactDOM.render()** method we can put all of our components into a single parent div:

```
ReactDOM.render(
    <div id='parentDiv'>
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
    </div>,
    document.getElementById('example'));
```
