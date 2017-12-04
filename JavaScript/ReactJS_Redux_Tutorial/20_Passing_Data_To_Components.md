# Passing Data To Components

Let's go over what we did thus far. We created a layout component called **App** to hold all of our applications other components. */dev/js/components/App.js*:

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
    </div>
);

export default App;

```

Notice that our constant **App** variable returns a div with the component **UserList**. This **UserList** component is a container which we will be working on in this section.

We then made a **Reducer**, which is a little piece of data that we want to save in our application. *dev/js/reducers/reducer-users.js*:

```html
/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Bucky",
            last: "Roberts",
            age: 71,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        },
        {
            id: 2,
            first: "Joby",
            last: "Wasilenko",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        {
            id: 3,
            first: "Madison",
            last: "Williams",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png"
        }
    ]
}

```

For every piece of data that we create, we need to combine it into one big object. Our one big object is called **allReducers**. *dev/js/reducers/index.js*:

```html
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers
```

Then we take all those **Reducers** and we make a master object called our **Store**, which is just a bunch of data. Any data that you want to save in your application we're gong to keep in the **Store**. */dev/js/index.js*:

```html
import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/App';

const store = createStore(
    allReducers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

```

In the above code block, our **Provider** took the **Store** which has all of that data and gives it to whichever component needs access to it. In this case, it is passed to the **App** component, which is our entire application.

Now we need to finish our */dev/js/containers/user-list.js* file to be able to pass the data from our *dev/js/reducers/reducer-users.js* file to our **App** component. Here is the current code in our *user-list.js* file:

```html
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
    render() {
        return (
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}

// Get apps state and pass it as props to UserList
// whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);
```

Instead of taking all the **Store** data and returning that from our **Container**, we only return the **Users** from the **Store** using the **mapStateToProps()** function defined above. We connect our **UserList** to our **mapStateToProps()** function by writing: **export default connect(mapStateToProps)(UserList);**. Now when we use the **UserList** class in our application, we will have access to the class and the **Store** data now that they are connected. You will notice that we are not using this **Users** data from our **Store** in the **UserList.render()** function. This is what we want to change so that we are returning html has our **User** data.

To do this, we will replace our list items with: **this.createListItems()**. The **UserList.createListItems()** function we will create will get each item in our *reducer-users.js* **Reducer** and create a list item for that user displaying their first name and last name. Remember, when we iterate through a list, we must use a **key** attribute to uniquely identify each list entry or it won't work. Lastly, we change our **UserList.render()** html return value to return an unordered list containing the return value of our **createListItems()** function.

```html
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>{user.first} {user.last}</li>
            );
        });
    }
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

// Get apps state and pass it as props to UserList
// whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);
```
