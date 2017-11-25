# Event Handling In React

Say you have a component with some buttons. Whenever a user clicks that button, you would have to be able to handle that event. We will make a sticky note class where the user can add, edit, and delete notes.

To do this we will create a new component called **Comment**. This component will be a block that will have some text on it containing your comment. It will have a button for editing the comment, and another button for deleting the comment. We will start with:

```html
<div id="container"></div>

<script type="text/babel">
    var Comment = React.createClass({
        render: function () {
            return (
                <div className="example" id='insideParentDiv'>
                    <!-- We will put stuff here -->
                </div>
            );
        }
    });
    ReactDOM.render(
        <div id='outsideParentDiv'>
            <!-- We will put stuff here -->
        </div>,
        document.getElementById('container'));
</script>
```

We can add attributes to out elements to apply styling. In JSX we cannot add the **class** attribute to our html elements since **class** is a keyword in JavaScript. We instead use *className* like we did in the above code block.

Inside our our component's parent div we will create a div to hold some text and two buttons. Our first button will be used to edit the comment and the second will be for deleting it.

```html
<div id="container"></div>

<script type="text/babel">
    var Comment = React.createClass({
        render: function () {
            return (
                <div id='commentContainer'>
                    <div className="commentText">Text</div>
                    <button className="button-primary">Edit</button>
                    <button className="button-danger">Remove</button>
                </div>
            );
        }
    });
    ReactDOM.render(
        <div className='board'>Test</div>,
        document.getElementById('container'));
</script>
```

To handle the event of clicking we need to define functions within our component. Currently, our component only has the function **render()** that is responsible for displaying html. We will create an **edit()** and a **remove()** function within our component that will display an alert for testing purposes:

```html
<div id="container"></div>

<script type="text/babel">
    var Comment = React.createClass({
        edit: function () {
            alert("Editing comment");
        },
        remove: function () {
            alert("Removing comment");
        },
        render: function () {
            return (
                <div id='commentContainer'>
                    <div className="commentText">Text</div>
                    <button className="button-primary">Edit</button>
                    <button className="button-danger">Remove</button>
                </div>
            );
        }
    });
    ReactDOM.render(
        <div className='board'>Test</div>,
        document.getElementById('container'));
</script>
```

We are not done! To link our buttons together with these functions we pass a reference of our functions to the **onclick** attribute of each button. Since our function is a part of the component class that we are currently in, we can reference our functions using: **{this.edit}** and **{this.remove}**:

```html
<div id="container"></div>

<script type="text/babel">
    var Comment = React.createClass({
        edit: function () {
            alert("Editing comment");
        },
        remove: function () {
            alert("Removing comment");
        },
        render: function () {
            return (
                <div id='commentContainer'>
                    <div className="commentText">Text</div>
                    <button onClick={this.edit} className="button-primary">Edit</button>
                    <button onClick={this.remove} className="button-danger">Remove</button>
                </div>
            );
        }
    });
    ReactDOM.render(
        <div className='board'>Test</div>,
        document.getElementById('container'));
</script>
```

Now to we will work on rendering our component on the page. We would like to make it so that the text we put inside our Comment component tag changes the title of our component when it displays:

```html
<Comment>We want this text to be the title of our Comment component</Comment>
<Comment>This title is different than our first title</Comment>
```

To access the text between our Comment component's tags from within the component, we can use {this.props.children}:

```html
<div id="container"></div>

<script type="text/babel">
    var Comment = React.createClass({
        edit: function () {
            alert('Editing comment');
        },
        remove: function () {
            alert('Removing comment');
        },
        render: function () {
            return (
                <div id='commentContainer'>
                    <div className="commentText">{this.props.children}</div>
                    <button onClick={this.edit} className="button-primary">Edit</button>
                    <button onClick={this.remove} className="button-danger">Remove</button>
                </div>
            );
        }
    });
    ReactDOM.render(
        <div className='board'>
            <Comment>Title One</Comment>
            <Comment>Title Two</Comment>
            <Comment>Title Three</Comment>
        </div>,
        document.getElementById('container'));
</script>
```

By putting **{this.props.children}** between our div with id *commentText*, whatever we put between the **Comment** tag element in the **ReactDom.render()** method will populate our between our div with id *commentText* in our component.
