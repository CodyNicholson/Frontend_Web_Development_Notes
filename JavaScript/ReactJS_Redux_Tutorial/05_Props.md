# Properties In React

Properties in React allow you to customize your components. For example, let's say you are making an application like Netflix where you want to display movies. You don't want to have a separate component for each movie you are displaying on your website. Instead, you would want to make the blueprint for one component and customize it in different ways for each individual movie. This is what **properties** allow you to do.

```html
<div id="container"></div>

<script type="text/babel">
    var Movie = React.createClass({
        render: function () {
            return (
                <div id='insideParentDiv'>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.genre}</p>
                </div>
            );
        }
    });
    ReactDOM.render(
        <div id='outsideParentDiv'>
            <Movie title="Avatar" genre="action" />
            <Movie title="Get Smart" genre="comedy" />
            <Movie title="The Notebook" genre="romance" />
        </div>,
        document.getElementById('container'));
</script>
```

As you can see in the above code, we assign attributes to our our **Movie** component element in the **ReactDOM.render()** method. We assign a **title** and a **genre** attribute to each individual component. We access these attributes in our **Movie** component's **render()** method using **this.props.attribute**, as seen above. This allows us to uniquely customize each Movie component we create.

A property is an HTML attribute that we can pass in to customize our components in different ways.
