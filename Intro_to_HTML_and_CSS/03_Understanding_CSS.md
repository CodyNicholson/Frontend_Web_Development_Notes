# Cascading Style Sheets

In CSS the most specific CSS style will overwrite the others

For Example:

HTML:

```HTML
<div class="makeTextRed">
    <p>I will be red</p>
    <p class = "makeTextBlue">I will be blue</p>
</div>
```

CSS:

```CSS
.makeTextRed
{
    font-color: RED;
}

.makeTextBlue:
{
    font-color: BLUE;
}
```

Notice both 'p' tags are in the scope of class "makeTextRed", you might think that both strings of text would be red, but because the most specific classes will overwrite others, the second 'p' tag will be blue since it's class is more specific (meaning it is targeting the 'p' tag specifically, whereas the 'div' tag is targeting both the 'p' tags)

Because of this CSS rule you can search and replace CSS styles by overwriting other styles

***

The order of CSS overwriting styles from most authority to least:

Inline style in an element (styling in the tag of the element), this whould be avoided however, use a stylesheet

Stylesheet inside the html file using the 'style' tag (Also, not ideal, use an external stylesheet)

Stylesheet in a separate file (The most ideal solution)

Default style of the browser (not decided by you, how the browser represents your code without css)
