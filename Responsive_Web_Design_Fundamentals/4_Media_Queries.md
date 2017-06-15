# Media Queries

A media query is used to change the CSS if a condition is met

A breakpoint is the point at which a condition in a media query becomes false/true resulting in a change to the webpage layout

For example:

```CSS
@media screen and (min-width: 500px)
{
    .myClass
    {
        display: none;
    }
}
```

This will set the display to none for any element with the class 'myClass' when the viewport is greater than 500px

To define a media query in the html:

```HTML
<link rel="stylesheet" media="Screen and (min-width: 500px)" href="someCssFile.css">
```

#### Where to put breakpoints?

Using (Ctrl + Shift + j) in google chrome you can open the devTools and readjust the size of the window by dragging the devTools menu back and forth

When you adjust the screen size while devTools is open you can see the exact size of the browser window changing in the top right corner of the screen

Using this method you can decide for your self when you think you should include a breakpoint to change the layout of a page, for example, by making buttons/text bigger or using CSS to hide certain images that are not necessary when the browser window is small

***

Minor Breakpoints can be used to make small changes to your webpage, like change the size of text or the width and height of different elements at different sizes of a viewport

### NEVER USE:

@import because of performance

min-device width/max-device width because you want your viewport to be relative to the browser size, not device
