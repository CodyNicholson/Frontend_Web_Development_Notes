# Creating New Components

Now that we have our edit and remove functionality working, the last feature we will add to our application is a button to create comments. Here is our starting code:

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
                this.props.updateCommentText(this.refs.newText.value, this.props.index);
                this.setState({editing: false});
            },
            remove: function () {
                console.log('Removing comment');
                this.props.deleteFromBoard(this.props.index);
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
            removeComment: function (i) {
                console.log('Removing comment: ' + i);
                var arr = this.state.comments;
                arr.splice(i, 1);
                this.setState({comments: arr});
            },
            updateComment: function (newText, i) {
                console.log('Updating comment ' + i);
                var arr = this.state.comments;
                arr[i] = newText;
                this.setState({comments: arr});
            },
            eachComment: function (text, i) {
                return (
                    <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
                        {text}
                    </Comment>
                );
            },
            render: function () {
                return (
                    <div className="board">
                        {this.state.comments.map(this.eachComment)}
                    </div>
                );
            }
        });
        ReactDOM.render(
            <Board />,
            document.getElementById('container'));
    </script>
```

The first step is to change our HTML **render()** function in our **Board** component to add our new button:

```html
            render: function () {
                return (
                    <div>
                        <div className="button-info create">Add New</div>
                        <div className="board">
                            {this.state.comments.map(this.eachComment)}
                        </div>
                    </div>
                );
            }
```

Our second step will be to eliminate all of our default comments from our **Board** component's **getInitialState()** function. Since we will be able to add new comments by the end of this section, there is no sense in starting with random placeholder comments.

The third step will be to create a new function in our **Board** component called **add()** that takes a variable **text** as input. **add()** will be used to create our new component.

```html
            add: function (text) {
                var arr = this.state.comments;
                arr.push(text);
                this.setState({comments: arr});
            },
```

The **add()** function will simply take the initial text value for the comment as input, make a copy of the **Board** component's **comments** state, push the input text value onto the copied array, and then set the **Board** component's **comment** state equal to the temporary array that has the new comment added. Now we just need to use our new **add()** function by calling it when the user presses the new **Add New** button above our list of comments.

This last step of calling the **add()** function when the **Add New** button is clicked can be done by refactoring our **Comment** component's **render()** function like this:

```html
            render: function () {
                return (
                    <div>
                        <button onClick={this.add.bind(null, "Default Text")} className="button-info create">Add New</button>
                        <div className="board">
                            {this.state.comments.map(this.eachComment)}
                        </div>
                    </div>
                );
            }
```

We add the **onClick** attribute to our "Add New" button in our **Comment** component's **render()** function with a value of: **{this.add.bind(null, "Default Text")}**. We have to use the **bind()** function to pass values into our function since JavaScript does not understand the scope of our function. Since JavaScript does not understand the scope of our function, we will just set the initial input value to always read "Default Text" (We could define this initial value to be anything). This completes the tutorial!
