# Passing Functions As Props

We defined our **updateComment()** and **removeComment()** functions inside our **Board** component. However, *the buttons that should trigger these functions belong to the **Comment** component*. In this section, we will learn how to call functions other component's functions by using **Properties**. Instead of just passing numbers and strings in our properties, we can pass entire functions.

```html
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
```

To pass the **removeComment()** and **updateComment()** functions as properties, we simply add attributes to the **Comment** component web element in the **eachComment()** function. Now whenever we create a new comment based on the **Board** component's **comments** state array, each **Comment** component will have access to the **Board** component's **removeComment()** and **updateComment()** functions. Now we have to call these two functions from our **Comment** component:

```html
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
```

In the above code you can see our modifications to the **Comment** component's **save()** and **edit()** function. We use properties to pass the index and functions from the **Board** component to the **Comment** component.

_**Whenever you have information that you want to pass to a child component, you can use properties**_. You can pass strings, numbers, or even entire functions as properties. The child will then have access to the data in the property via **this.props.PROPERTY_NAME**. In the next section we will go over how to add new comments to our board.
