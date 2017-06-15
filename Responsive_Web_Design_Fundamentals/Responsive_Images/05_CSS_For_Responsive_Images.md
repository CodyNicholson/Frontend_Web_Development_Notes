# CSS For Responsive Images

```css
max-width: 100%;
```

Will make sure your images will always adjust to fit in the viewport by always being at least as wide as the viewport width.

***

```css
margin-right: 10px;
width: calc((100% - 10px)/2);
```

This code is meant for the img tag and will put images side by side with a 10px margin between them.

***

```css
width: 100vw;
```

Will make the webelement width equal to 100% of the viewport width

***

```css
height: 100vw;
```

Will make the webelement height equal to 100% of the viewport height

***

```css
width: 100vmin;
height: 100vmin;
```

Will adjust the width/height to always be equal or less to the viewport width/height

***

```css
width: 100vmax;
height: 100vmax;
```

Will adjust the width/height to always be equal or greater than the viewport width/height
