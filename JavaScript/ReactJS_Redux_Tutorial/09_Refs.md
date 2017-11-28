# Refs in React

In this section our goal is to make our sticky note comment message update when the user saves the comment. This action can be broken into two part in our code. First, we will need to get the value of the user input when the user clicks "save". Second, we need to take the value and set it equal to the comment text message.

### 1. Getting the value of the user input when the user clicks save

To do this, we need to get the value of the textarea element after the user changes the value. We cannot rely on an id to our textarea because if we have multiple components then we will have duplicate textareas with the same id. We also can't reference this components textarea because we might want our component to have multiple textareas. The solution to this problem is to use **refs**.

**refs** are used to get a reference to one of the child elements of your component. We can give our textarea the **ref** attribute with a value of *newText* (We can give it any value we want) like this:

```html
            renderForm: function () {
                return (
                    <div>
                        <textarea ref="newText" defaultValue={this.props.children}></textarea>
                        <button onClick={this.save} className="button-success">Save</button>
                    </div>
                );
            },
```

The reason this is better then id is because if you render all these with the same id it won't work since you need to have a unique id for each component. We will now utilize the textarea **ref** in our **Save()** function:

```html
            save: function () {
                var val = this.refs.newText.value;
                console.log('New Comment: ' + val);
                this.setState({editing: false});
            },
```

In our **save()** function we can reference our textarea's value using our ref like this: **this.refs.newText.value**. Then we will print a message to the console containing our users comment message.

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
        ReactDOM.render(
            <div className='board'>
                <Comment>Title One</Comment>
                <Comment>Title Two</Comment>
                <Comment>Title Three</Comment>
                <Comment>Title Four</Comment>
            </div>,
            document.getElementById('container'));
    </script>
```
