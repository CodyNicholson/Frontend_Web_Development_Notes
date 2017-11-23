# React Components

A **component** is one of the core building blocks of react. Basically ever react app you make will consist of components. Components are simply parts of your website. A button on a webpage could be one component, another could be a video player, a navigation bar, and so on. You can put more than one component together to make a bigger component. We will start with this code:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React - Template</title>
    <script src="../../js/react.min.js"></script>
    <script src="../../js/react-dom.min.js"></script>
    <script src="../../js/browser.min.js"></script>
</head>
<body>

    <div id="example"></div>

    <script type="text/babel">

        // We will put stuff here

    </script>

</body>
</html>
```

To make a component, the first thing you do is make a variable and set it equal to **React.createClass()**. The **React.createClass()** method is used to create a component. We can name the component we create whatever we want. Since we are creating a new object, we will put curly braces in a the parameter with all of the fields defined. Inside the curly braces is where we make our component. Since a component is a part of your website, it consists mostly of HTML. We can have a component that is just a heading, or an entire list, and so on. Our component needs to return some HTML. So do this, we use the **render()** method. All our render function will do is return some HTML. Whatever HTML the render function returns defines what your component is.

```html
var exampleComponent = React.createClass({
    render: function() {
        return (<h3>This is a simple component</h3>);
    }
});
```

The above component is simple, but complete. We can add attributes, properties, states, and add some more functions when we create our component. We did not go that far this time since we are just keeping it simple. Whenever we use the component **exampleComponent** in the future, it will display our heading 3 that we created in our component. This makes our code reusable and easy to read.

To display our created component on our webpage using:

```html
ReactDOM.render(
    <exampleComponent />,
    document.getElementById('example')
);
```

Our completed code looks like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React - Template</title>
    <script src="../../js/react.min.js"></script>
    <script src="../../js/react-dom.min.js"></script>
    <script src="../../js/browser.min.js"></script>
</head>
<body>

    <div id="example"></div>

    <script type="text/babel">
        var ExampleComponent = React.createClass({
            render: function() {
                return (<h3>This is a simple component</h3>);
            }
        });
        ReactDOM.render(
            <ExampleComponent />,
            document.getElementById('example')
        );
    </script>

</body>
</html>
```
