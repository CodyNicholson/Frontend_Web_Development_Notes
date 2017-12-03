# mapStateToProps

What we did up until this point is we created our main data storage and we've passed it to our application so now we can use it in any component that we want. We won't use our main data storage in our main layout **App** component because this component isn't supposed to do anything besides hold other components. When we say "component" throughout the rest of this section, we are referring to a layout component. So we will now create a new component that will accept the main **Store** data. Our **Store** data will have to go through a **Container** before it can reach our component. **Containers** are components that are hooked up to the data **Store**.

**Containers** usually have two functions to connect the data to the layout component. There is multiple ways to set this up:

1. One way is to make a directory called */components* and have all of their layout components in there. Then, they make another directory called */containers* that bind the **Store** and the components together. This is one way.
2. Another way to do it is to combine the components and **Containers** into one file. This is a little less organized, but it makes it a lot easier to see what is going on in the application. For this reason, we will use this structure.

We will now create our first **Container**: */dev/js/containers/user-list.js*. In this file, we import React and the Component class from 'react'. In order to make a **Container**, we need to import the **bindActionCreators** function from 'redux'. Lastly, we need to import **connect** from 'react-redux'. Now we can set this up like a plain component. So we create a class called *UserList*. Our class needs to extend **Component** since we will be using modules in this build environment. Since our **Container** is just like a component, we will make a **render()** method that will return some HTML. We also have to remember to export our class for use in the rest of our application:

```html
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
    render() {
        return(
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}

export default UserList;
```

Now we need to go to our */dev/js/components/App.js* file to include our new *user-list* **Container** class by writing: **import UserList from '../containers/user-list';**. Now whenever we want to use this component we can reference it by using the class name in our custom tag:

```html
const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
    </div>
);
```

We have not done anything **Container** related yet! We just created a normal React component and returned it in out */dev/js/components/App.js* file. So how do we connect our **user-list.js** React component to our **Store** to make it a **Container**? We can make our **user-list.js** component a **Container** by using some of our imports we mentioned earlier. We will do this by making a new function to */dev/js/components/App.js* file but NOT in our **UserList** class called: **mapStateToProps()** that takes a **state** as input, which is part of your **Store**.

All this function does is take a piece of your application **Store** and it passed it into your component as a property. It can pass whatever pieces of the **Store** in that it wants to. We would like to take all of our Users and display them. So we will return from our **mapStateToProps()** function a variable that we will create called **users** that is equal to **state.users**. Lastly, we need to call the **connect()** function in our export statement at the bottom of the file. **connect()** takes our **mapStateToProps()** function and it takes the **UserList** since those are the two objects we want to connect (The part of the **Store** returned by **mapStateToProps()** and the HTML returned by the **UserList.render()** function). This takes the **UserList** component and making it aware of our applications **Store**, and then we are exporting the **UserList** with that awareness of the **Store** so we can use it in our */dev/js/components/App.js*. Now our *user-list.js* is a smart component, which we call a **Container**.

```html
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {

    render() {
        return(
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return (
        user: state.users
    );
}

export default connect(mapStateToProps)(UserList);
```

Notice that since the **UserList** class and the **mapStateToProps** function are independent of each other, you could define them in separate files. This is how some people like to do it, as we discussed in the two implementations of this structure.
