# Getting Started

First we have to go to the React website and download the two React JS files that need to be included in our webpage: **react.js**, and **react-dom.js**. When we write React code, we are going to use a flavor of JavaScript called JSX. The advantage JSX has over plain JavaScript is that it is easier to understand since we can integrate plain HTML code much easier than we can in JavaScript. Your browser can only understand plain JavaScript, not JSX. Because of this, we need to use a tool called a transpiler to convert our JSX into plain JavaScript. The transpiler we will use is **browser.js**. See the code below to see how we included all the dependencies we talked about above:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React - Template</title>
    <script src="../../js/react.min.js"></script>
    <script src="../../js/react-dom.min.js"></script>
    <script src="../../js/browser.min.js"></script>
</head>
<body>

    <div id="container"></div>

    <script type="text/babel">
        ReactDOM.render(
            <h2>Welcome to React!</h2>,
            document.getElementById('container')
        );
    </script>

</body>
</html>
```
