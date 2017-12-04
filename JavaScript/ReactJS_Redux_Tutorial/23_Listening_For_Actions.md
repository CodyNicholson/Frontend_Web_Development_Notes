# Listening For Actions

Previously, we learned that **Reducers** are just part of your application data. **Reducers** also take in **actions** and updates part of the application state. Recall our **USER_SELECTED** action from before:

```js
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
```

This **action** doesn't manipulate anything, it just returns some stuff. It is the responsibility of the **Reducer** to determine how that **action** is going to change your application. We will make it so that, when we click a user name in our application, our **Reducer** will return the data to be displayed below the user list. We will call the selected user **active user**. We could add a more fields to our current *reducer-user.js* file, but it would be more organized to create an entirely new **Reducer** called **reducer-active-user.js** in our */dev/js/reducers* directory.

This new **Reducer** will be equal to whatever user was selected in our application. To do this, there is two pieces of data that our application needs to be aware of: a list of all of our users stored in *reducer-users.js*, and the selected user stored in *reducer-active-user.js*. Since our selected user is going to change, we need to set it up differently than our user reducer. Whenever our *reducer-active-user.js* hears that **USER_SELECTED** action happens, it will return the **payload** of that user. It will hear this because **whenever an action occurs it gets sent to all reducers**. Here is the code we will write in our *reducer-active-user.js* file:

```js
/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
    }
    return state;
}
```

Since we will not have a selected user when the application starts until a user name is clicked, we set the default value of our **state** to null. Our reducer will then want to check if an action happened. Since we might have more than one action in the future, we will implement this check with a switch statement. We will listen for **action.type**, which you can see in the first code block of this section. In the case where the action was **USER_SELECTED** we want to return **action.payload**. In this case, **action.payload** will be the user object of the selected user.

To add this reducer to our application, we need to add it to our **allReducers** object in the *dev/js/reducers/index.js* file:

```js
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer
});

export default allReducers
```

So we import: **import ActiveUserReducer from './reducer-active-user';**. Then we add it to the **combineReducers()** call in our **allReducers** constant variable. In the next section we will tie up the loose ends and finish our application.
