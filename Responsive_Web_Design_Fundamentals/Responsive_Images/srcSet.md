#SrcSet

srcsets allow you to change the image that displays at a certain viewport width so you are always giving the user the best ratio of quality for file size

Ex:

```HTML
<img src="small.jpg" srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w">
```

The small.jpg image will display for viewports smaller than 1000px wide, medium.jpg for viewports between 1000px and 1499px, and large.jpg for viewports larger than 1499px

-

Example 2:

```HTML
<img src="images/Coffee_1280w.jpg" srcset="images/Coffee_1280w.jpg 1280w, images/Coffee_640w.jpg 640w" sizes="(max-width: 960px) 50vw, 100vw" alt="Coffee by Amy March from Turkey">
```

-

Example 3:

```HTML
<img  class="dpi" src="images/Den_Haag_2x.jpg" srcset="images/Den_Haag_2x.jpg 2x, images/Den_Haag_1x.jpg" alt="Den Haag Skyline">
```

Notice how I've got a src as a backup

The order of the sources in srcset doesn't matter

Also, if you omit the multiplier, it will default to 1x
