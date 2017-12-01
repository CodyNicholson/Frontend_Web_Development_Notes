# Store

Our first step in this project will be to create the Redux **Store** to hold all of our application's data. As we said, the **Store** is one JavaScript object that stores all the data for your entire application. To create one, we will go to our *dev/index.js* file and import a function called: **import {createStore} from 'redux';**. We surrounded our *createStore* import with curly braces because we only want to use that one variable from *'redux'*, and not the entire library. Since we imported **createStore** this way, we can immediately start using it like a function rather than having to do work to make it accessible.

We are now going to make our **Store** a *constant*. Anytime you are using a variable and you're only going to be making it one time and not changing it's value at all, you should make it a constant. This ensures that you won't accidentally change the value later since you can't, and it is more efficient to create a constant than to create a variable.

```js
import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';

const store = createStore();
```

The **Store** has all of our application data that the **Reducers** determine we should save. Our application is going to have users, and movies, and music, and tons of data. Instead of making one big function to manage all of this, we break it up into separate **Reducers**. We will have a *reducer-movie*, a *reducer-user*, and so on. In order to organize everything, we will make a new directory that will contain all of our individual **Reducer** JavaScript files in */dev/js/reducers*. Our *reducer-user* function will return the part of the application responsible for storing the users so that later on whenever we delete or add or change users this function is going to be used.

Remember, the data in our **Store** const will change as the user interacts with the application. Even though **Store** is a const, this will be fine because AFSD

