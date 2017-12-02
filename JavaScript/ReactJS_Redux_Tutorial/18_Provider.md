# Provider

In this section we will go over how to pas data from our **Store** to our components using **Providers**. Our first step is to create a component. So we will create a new directory called *components*, and we will create a new file called *dav/js/components/App.js*. This **App** component we could have named *Layout* because it won't do much besides providing a layout to put other components in.

In this new file we need to import React. Since we don't need any fancy functionality, we can create a constant variable **App** and set it equal to an anonymous function. Remember that a component is just a function that returns some HTML. We will put all of our other components in our **App** component. Our application will simply be a list of user names on top, and if you click a user name it will display their profile data on the bottom of the page. Since we want to include this in another part of our application, we need to write: **export default App;**. The last thing we want to do is include our styling. Whenever you use this styling, you need to specify where you want to put it. If we put it in our main layout, then we will be able to use it in any component. To do this we write: **require('../../scss/style.scss');**.

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

Now we need to pass our **Store** to all of our components. To do this, we need to make a **Provider** which makes all of your data available to all **Containers**, which are similar to components. In our *dev/js/index.js* file we need to import: **import {Provider} from 'react-redux';**. Using the **Provider** object from the *react-redux* library, we can display our data from the **Store**. We import our *dev/js/components/App.js* file in our *dev/js/index.js* file so we can use that component in our **ReactDOM.render()** method like this:

```html
import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import App from './components/App';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

Since we use the **Provider** component that we imported in our **ReactDOM.render()** method, it becomes our new root component. We can then put our **App** component inside our **Provider** component, as seen above. Lastly, in our **Provider** component tag we need to add the *store* attribute and pass it our *store* constant variable that we defined above our **ReactDom.render()** method. This is all we need to do to use our **Provider**. Now, whenever we make any other components we can put them inside our **Provider** tag. This makes our **Store** available to every component in our application. Our data will not show up just yet in our application, but we will continue working on it in the next section.
