# Reducers

In this section we will create the *reducer-user.js* file. Our *reducer-user* function will return the part of the application responsible for storing the users so that later on whenever we delete or add or change users this function is going to be used.

After creating our file at *dev/js/reducers/reducer-user.js*, our first step will be to *export* our function since we are going to use this in another part of our application. This function will simply return an array of users.

```js
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

As you can see, a **Reducer** is just a piece of data that we want to save in our **Store**. Our **Store** is just one JavaScript object, but if we have a *reducer-movie*, a *reducer-user*, and so on, won't our **Store** have more than one object? Before we pass our data into our **Store**, we need to combine our **Reducers** into one big object. To do this, we will create a new file called *dev/js/reducers/index.js*.

Inside our *reducers/index.js* file we can call a function called **combinedReducers**, and this is a built in function that takes all of our **Reducers** and combines them into one object. We import this function like this: **import {combineReducers} from 'redux';**. We import a **Reducer** like this: **import UserReducer from './reducer-users';**. Then we create a new constant variable called **allReducers** to hold the object returned by our *combineReducers*:

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

Whenever we add a new **Reducer**, we need to remember to add it to our *combineReducers* arguments. What we name each argument in our *combineReducers* function is the same name we will use throughout out application to access the **Reducer**. Thus, we will always reference our *UserReducer* by using the name **users** that we defined in our *combineReducers* function arguments. Now we need to import the **allReducers** object into our *js/index.js* file like this: **import allReducers from './reducers';**. Since we named our JavaScript file *index.js* in our *reducers* directory, it will be picked up by default when we target that directory with our import.

In our next section we will learn how to take data from our **Store** and pass it to our components.
