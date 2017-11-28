# States In React

We have learned to customize our components in React using Properties. The problem with properties is that they cannot change once they are set. If we want to change the customization of a component after we initially customize it, we need to use **States**. For our example, we will create a CheckBox component that will change state from *Checked* to *Unchecked* when the user clicks on it. We will start by writing this code:

```html
<div id="container"></div>

<script type="text/babel">
    var CheckBox = React.createClass({
        getInitialState: function () {
            return {checked: false}
        },
        render: function () {
            var msg;
            if (this.state.checked)
            {
                msg = "checked"
            }
            else
            {
                msg = "unchecked"
            }
            return (
                <div>
                    <input type="checkbox" />
                    <h3>Checkbox is {msg}</h3>
                </div>
            );
        }
    });
    ReactDOM.render(
        <CheckBox />,
        document.getElementById('container'));
</script>
```

The **getInitialState()** function that we added to our component is a special function for React. This is where we set the initial states for our components. You can add as many states into the **getInitialState()** function as you need, but in our case we only need one, which is *checked*.

In our component's **render()** function we begin by creating a new variable **msg**. We then use an if/else statement to check if our component's checked status is true. If it is, **msg** equals "checked" and if it isn't **msg** will equal to "unchecked". Lastly, we return our HTML from our **render** method and include the value of **msg** in our h3 tag. Notice that the status of checked will always be false in the above program. Our next step is to make it so the user can change this status.

```html
<div id="container"></div>

<script type="text/babel">
    var CheckBox = React.createClass({
        getInitialState: function () {
            return {checked: true}
        },
        handleChecked: function () {
            this.setState({checked: !this.state.checked})
        },
        render: function () {
            var msg;
            if (this.state.checked)
            {
                msg = "checked"
            }
            else
            {
                msg = "unchecked"
            }
            return (
                <div>
                    <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
                    <h3>Checkbox is {msg}</h3>
                </div>
            );
        }
    });
    ReactDOM.render(
        <CheckBox />,
        document.getElementById('container'));
</script>
```

The first step is to assign our input checkbox web element the attribute **defaultChecked** with a value of **{this.state.checked}**. This means that if our component's initial state is true, then the checkbox will by checked upon loading the page.

The second step is to create a method to handle the event of a user clicking our checkbox. We create the **handleChecked()** function that takes the component's checked state and flips it to the opposite of that using the **!**. Then, to tie this function to our input checkbox we add the **onChange** attribute to our input web element and give it a value of: **onChange={this.handleChecked}**. Now our message will change when the user toggles the checkbox on our site.

Notice that React automatically re-renders our page when the state changes. We do not need to write any code to tell the page to refresh when our state changes.
