# Simple React Demo

We will build an app that displays text on the screen using react just to see how it works

Whenever you make something in react, you are using react to generate HTML. This will usually be done by connecting to a database or to an API to get a list of users, and then generating everyone's profile picture or username or something. For now, what we will do is populate header tags using react.

When we are generating this HTML code, we need somewhere to put it on our website. Here is our code before using react to generate HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React - Template</title>
    <script src="../../js/react.min.js"></script>
    <script src="../../js/react-dom.min.js"></script>
    <script src="../../js/browser.min.js"></script>
</head>
<body>

    <div id="example"></div>

    <script type="text/babel">
        ReactDOM.render(
            <h2>Welcome to React!</h2>,
            document.getElementById('example')
        );
    </script>

</body>
</html>
```

We will create a new div with the id 'example' inside the body tag. This div tag is where we will put our generated HTML code from react.

Below our div, we will create a script tag. Since we will not be writing plain JavaScript, we need to set the script tag's **type** attribute to *text/babel*. This indicates that we will be writing write JSX code, which allows us to use HTML syntax in our JavaScript. We are able to use *text/babel* because we imported the transpiler: *browser.min.js*. The transpiler will convert our JSX into regular JavaScript so the browser doesn't freak out.

We will write one line of code to check that react is working. Inside our script tag we will use **ReactDOM.render()**. When we talk about components later, we will use the render method like this. For now, we just need to know that the render method takes a bit of HTML and it throws it into a target - wherever you want to display it. The first parameter of the render method is HTML code. The second and last parameter is the the location that we want to display our HTML. We would like to display our HTML in the div with the id 'example'. To do this, we can use **document.getElementById('example')**. This will return a reference to the our element (the div tag with id 'example'). See the below code:

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

    <div id="example"></div>

    <script type="text/babel">
        ReactDOM.render(
            <h2>Welcome to React!</h2>,
            document.getElementById('example')
        );
    </script>

</body>
</html>
```

If our script tag did not have **type="text/babel"**, then we would get a syntax error and our code would not work. We cannot use JSX without this type attribute.
