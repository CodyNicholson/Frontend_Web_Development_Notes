# Multiple Child Components

One of the problems we are going to have to face is that while we have multiple components, they do not know anything about each other. This means that in one component we cannot reference anything in another component. For example, let's say that we want to rearrange our sticky notes in our application. With our current implementation, this is not possible since the sticky notes would need to know about each other to be able to rearrange them.

In order to solve this problem, we need to wrap all our our components into some kind or parent container that will act as a component manager. To do this, we will create a **Board** component that will be made up of all of our **Comment** components. The **Board** will know about all of the **Comment** components it contains - so it will be able to move them around and delete them. This makes for a much better system than just having a bunch of standalone component objects.

```html
    <div id="container"></div>

    <script type="text/babel">
        var Comment = React.createClass({
            getInitialState: function () {
                return {editing: false}
            },
            edit: function () {
                this.setState({editing: true});
            },
            save: function () {
                var val = this.refs.newText.value;
                console.log('New Comment: ' + val);
                this.setState({editing: false});
            },
            remove: function () {
                alert('Removing comment');
            },
            renderNormal: function () {
                return (
                    <div id='commentContainer'>
                        <div className="commentText">{this.props.children}</div>
                        <button onClick={this.edit} className="button-primary">Edit</button>
                        <button onClick={this.remove} className="button-danger">Remove</button>
                    </div>
                );
            },
            renderForm: function () {
                return (
                    <div>
                        <textarea ref="newText" defaultValue={this.props.children}></textarea>
                        <button onClick={this.save} className="button-success">Save</button>
                    </div>
                );
            },
            render: function () {
                if(!this.state.editing)
                {
                    return this.renderNormal();
                }
                else
                {
                    return this.renderForm();
                }
            }
        });
        var Board = React.createClass({
            getInitialState: function () {
                return {
                    comments: [
                        'Title one',
                        'Title two',
                        'Title three',
                        'Title four'
                    ]
                }
            },
            render: function () {
                return (
                    <div className="board">
                        {
                            this.state.comments.map(function (text, i) {
                                return (<Comment key={i}>{text}</Comment>);
                            })
                        }
                    </div>
                );
            }
        });
        ReactDOM.render(
            <Board />,
            document.getElementById('container'));
    </script>
```

The first step to refactor our code is to create the **Board** component. We will then create the **getInitialState()** function in our **Board** component. We will define an array of strings called **comments** that will contain all of our comments. Add three comment strings to our array.

Our second step is to create the **render()** function for our **Board** component. In our **render()** function we can return a div that contains a **Comment** component for each value in our **Board** component's **comment** array. To do this we use **this.state.comments.map()**. The **map()** function will apply a function that we define to every element in the **comments** array. Our function will return a **Comment** component for each element in our **comments** array with the corresponding string value as the comment message.

Our third step is to change the **React.DOM.render()** function to only render a single **Board** component since it will have all of our **Comment** components inside of it.

Our fourth step is to create a reference to each of the **Comment** components in our **Board** component. To do this, in the **Board.render()** function we add the **key** attribute to the **Comment** element. The **key** attribute is a keyword in React because it allows us to add a unique reference to each of our child **Comment** components. We could implement this same functionality using **id** instead of **key**, but the convention in React is to use **key**.

**NOTE:** Since we refactored our application to use the **Board** component to manage all of the **Comment** components, we have lost the ability to update the value for our comments in the application using the "Save" button. We will fix this issue in the next video.
