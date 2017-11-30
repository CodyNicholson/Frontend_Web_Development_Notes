# Project Setup

We can download the project starter code from [here](https://github.com/buckyroberts/React-Redux-Boilerplate "Redux Starter Code"). Then we can install all the dependencies by following the instructions in the README.md file - making sure we have **node.js** and **webpack** installed. In package.json you can see all of the packages the project requires that will be installed upon running **npm install** in the root of the project.

What **webpack** does is - it sets up a development server so we can change our code and refresh to get immediate updates. It also converts all of our JSX code into JavaScript that the browser can understand. Also, we can write SASS code and it will be converted into normal CSS. That is how **webpack** helps us.

In this project (**/2_redux_src**), our code is broken up into the dev code and src code directories. **dev/** is where we have all of our JavaScript and CSS styling. **/src** is where we have our *index.html* file and our *bundle.min.js* file. After our project builds, all of our code we write in the **/dev** directory gets sent to the *bundle.min.js* file in the **/src** directory.

Next, we can take a look at our **dev/index.js** file and pay attention to the first line: **import 'babel-polyfill';**. This makes our code compatible with older browsers. The other lines of code will be discussed in later sections.
