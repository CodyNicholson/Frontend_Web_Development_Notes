# Finishing The Application

The last thing we have to do is build a container called */dev/js/containers/user-detail.js* to display thee user details for our selected user. Previously, we made the the **user-list.js** container to connect our state and action creators to our **UserList** object. Now we will connect our active user data to a **UserDetail** object. 

```html
import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
```

In order to add the **activeUser** to our properties, we create a **mapStateToProps()** function and return the current states **activeUser**. Now that we have access to the active user, we can add the user's data to our **render()** function. We connect this **mapStateToProps()** function to our **UserDetail** object at the bottom of the file.

Now that our container is all ready, we need to import it in our main layout file: */dev/js/components/App.js*. After we import it, we can add the component to our HTML by including it as a custom HTML tag.

```html
import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
```

Using our current implementation we will get an error. This is because, since we originally set the **activeUser** equal to null, we cannot read the properties of a null object. So in our */dev/js/containers/user-detail.js* file we need to modify our **render()** function to check for if our **selectedUser** is null before we try to display that users data:

```html
class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}
```
