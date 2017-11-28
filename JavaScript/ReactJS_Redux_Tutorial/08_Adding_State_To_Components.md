# Adding State To Components

Now we will change our sticky note application by adding states. Our sticky notes will have the *editing* state that will be set to **false** by default, and will change to **true** when the user clicks the **Edit** button in our application. The initial code looks like this:

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
                <Comment>Title Four</Comment>
            </div>,
            document.getElementById('container'));
    </script>
```

Our first step to adding states is to create our component's **getInitialState()** function where we will create our *editing* state and set it's initial value to false.

Our second step is to change the **edit()** function by replacing the alert with: **this.setState({editing: true})**. This will change our component state whenever they click the button. This behavior is already tied to our HTML since we have the **onClick** attributes already defined from before.

Our third step is to hide the edit button and remove button when we are in editing mode, and display a save button instead. To do this we will create a **save()** function for our component that sets our *editing* state to false. Then we will create two new functions in our component: **renderNormal()**, and **renderForm**. The **renderNormal()** function will be called when we are not in *editing* mode, and the **renderForm()** function will be called when we are in *editing* mode. Our component's regular **render()** will call one of these two new functions based on the value of the **editing** state. Here is the code:

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
                        <textarea defaultValue={this.props.children}></textarea>
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

Now our state will change the rendering of our component by changing the generated HTML code. It will change back and forth using the Edit and Save buttons.
