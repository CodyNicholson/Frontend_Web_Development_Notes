#Background Images

There are many different effects you can add to a background image to make your site look great:

Turn a speical text character into a background image using "http://unicode-table.com/en/":

```HTML
<style>
    body {
      align-items: center;
      background: linear-gradient(white, black);
      display: flex;
      font-size: 50vw;
      height: 100vh;
      justify-content: center;
      margin: 0;
      text-shadow: 0px 0px 94px red;
    }
</style>

<body>★</body>
```

Make sure you have a <meta> tag with unicode 8 on your webpage to do this^

Try to always copy the character in like I did the star above, and not use the html code for it (ex: &#119070 is a treble cleft, but its better to just copy and paste the char in instead of its code)

-

###CSS Cover vs Contain:

Cover - Will keep the entire image inside the container for one of its dimensions, and will overflow the other if needed

Contain - Will keep the entire image inside the container even if it means making one of the dimensions smaller than the container

-

###Background Gradient:

```CSS
background: linear-gradient(#000, white) no-repeat;
```

-

###Background checkered gradient:

```CSS
    body {
      background:
      linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
      linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
      linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
      linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
      linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
      linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
      background-color: #131313;
      background-size: 20px 20px;
    }
```

-

Have an image change with the size of the viewport and add a transition:

```CSS
div
{
    background-image: url(koala.jpg);
    background-size: cover;
    height: 50vw;
    transition: background-image 2s;
    width: 50vw;
}

@media screen and (max-width: 500px)
{
    div
    {
        background-image: url(koala_crop.jpg);
    }
}
```
