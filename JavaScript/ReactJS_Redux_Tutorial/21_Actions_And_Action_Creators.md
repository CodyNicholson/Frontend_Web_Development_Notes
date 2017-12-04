# Actions & Action Creators

Now that we have our application component displaying how we want, we need to setup our actions. An **action** is anything you can do to your application, like clicking a button or submitting a form. We would like to make it so that whenever we click on of our user's names, we display their profile data.

In code, an **action** will be returned when an event happens. We will create a directory called *actions* to hold all of our action JavaScript objects. We will then create an *index.js* file inside this directory since we will only be making one action for our application and we want to keep it simple. We will create a **selectUser()** constant function in this file. We can export this constant function immediately since we will only have the one function in this file.

Our function will take the selected user as input called **user**. This **action** will be made up of two parts. The first part is a **type**. The **type** is just a string that explains what happened called the **payload**. For example: "New Movie Button Clicked", "User Name Clicked", "Slider Moved Left". The second part is *any information that you need to give your app*. In the case of clicking the a user name of user in our application, we will return the **user** object.

```js
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
```

The actual function is called the **action creator**. The **action** is only the returned values, **type** and **payload**. Now we are going to actually use this **action creator** in our application.

In our *dev/js/containers/user-list.js* file we need to add an event handler onto our list item to handle the event where the user clicks the user name list item. First we import our *selectUser* **action creator**. It may seem like we should just add an **onClick** attribute to our list item with the value **selectUser()**. However, if we did this we would be making only a React application. To make Redux work with our React application, we cannot pass in our **selectUser()** function directly. We need to connect our **selectUser()** function to our **user-list.js** **Container**. To do this, we create a new function called **matchDispatchToProps()**. Instead of passing in the **selectUser()** function directly, we're going to pass it in as a *property*, just like we do in the **mapStateToProps()** function. The *Dispatch* part just means that we will be calling a function.

```js
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}
```

In our function, we call and return **bindActionCreators()** which just connects our **selectUser** object to the function. To connect the **matchDispatchToProps()** function to our UserList object we add it to our **connect()** call at the bottom:

```js
// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
```

Now we can call the *property* **selectUser()** in the **onClick** attribute of our list item like this:

```html
class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }
```

We have successfully hooked up an **action creator** to a user event! Here is the entire *dev/js/containers/user-list.js* file:

```html
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);

```
