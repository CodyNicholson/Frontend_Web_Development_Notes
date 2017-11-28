# Updating State And Removing Components

In this section we will make our comments editable and we will allow the user to remove comments. Our first step is to refactor and add some code to our **Board** component. Here is our starting code:

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

We used the anonymous function in the **map()** function of our **Board.render()** function to loop through our **Board.comments** state and create a new **Comment** component for each of the elements in our state. Instead of using this anonymous function, it would be better to define our own function called **eachComponent**:

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
                    <Comment key={i} index={i}>
                        {text}
                    </Comment>
                );
            },
```

Our **eachComponent()** function does exactly what our anonymous function did, it is just better convention to use a defined function.

We created a **removeComment()** function that will takes an index **i** as input, then creates a temporary variable that is a copy of the **Board.state.comments** array, and then we use the **splice()** method to eliminate the comment at the input **i** index in our temporary array. After removing this element from our temporary array, then we can set the **comments** state of our **Board** equal to our temporary array to complete the removal process.

We also created an **updateComment()** function that takes a **newText** value and an index **i** as input. This function will also create a temporary array that is a copy of that **Board** component's **comments** state, but instead of splicing out the element at index **i**, it will set the value of that index to equal **newText**. Then it will set the **comments** state of our **Board** equal to our temporary array to complete the update process.

**NOTE:** We have created these functions, but our application is currently not using them. We will resolve this issue in the next section.

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
                console.log('Removing comment');
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
                    <Comment key={i} index={i}>
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
