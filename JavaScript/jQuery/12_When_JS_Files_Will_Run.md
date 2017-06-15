# When JavaScript Will Run

External JavaScript files in the 'head' tag of a document are generally downloaded earlier than JavaScript files included in the 'body'

JavaScript files are also executed immediately at their location in the document, which means they can't access any DOM elements that come after their 'script' tag in the DOM

If you include your script in the 'head' tag normally, it will run as soon as it's downloaded, which will occur before the DOM has built the elements you want your script to run against, so your script wouldn't be able to do anything

You could include your script at the bottom of the 'body' tag, but that would mean that the download could potentially start later in the load process, slowing down the initial page render

***

To fix this you can put this in the 'head' tag:

```javascript
$(function() {
  $('img').attr('src', 'http://placepuppy.it/350/150');
});
```

This will run as soon as the DOM tree is ready because that is when .attr() will be able to find the 'src' attribute and change its value to 'http://placepuppy.it/350/150'
