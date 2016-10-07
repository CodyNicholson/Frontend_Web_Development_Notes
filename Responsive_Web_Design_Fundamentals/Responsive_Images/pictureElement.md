#Picture Element

The 'picture' element is used to offer support for different browsers by providing a priority list for displaying an image

For example, below the pic.webp version of the image is the highest priority, and if that is incompatible with your browser then it will try to display the .jpg image next, and so on

Example:

```HTML
<picture>
    <source srcset="pic.webp" type="image/webp">
    <source srcset="pic.jpg" type="image/jpeg">
    <img src="pic.jpg" alt="A picture">
</picture>
```

If the browser can use the first picture it will, otherwise it will continue down the list until it finds something it can use

If the browser does not support the picture element then it will automatically run the <img> tag and forget the <source> tags

-

You can also add media queries to 'source' in a 'picture' element:

```HTML
<picture>
    <source media="(min-width: 750px)" srcset="pic.webp" type="image/webp">
    <source srcset="pic.jpg" type="image/jpeg">
    <img src="pic.jpg" alt="A picture">
</picture>
```
