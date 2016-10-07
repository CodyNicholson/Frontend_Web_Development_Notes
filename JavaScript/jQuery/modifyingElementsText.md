#Modifying Element Text Values


html:

```HTML
<div class="articles">
    <input id="input" value="Cool Articles" type="text">
    <h1>Cool Articles</h1>
</div>
```

js:

```javascript
$('#input').on('change', function()
{

    var val;

    val = $('#input').val();

    h1 = $('.articles').children('h1');

    h1.text(val);

});
```

When the user inputs text into the input box, that will appear on the webpage as a result of the 'input' tag, then that input text will the value of the text of the <h1> element that is a cild of the  element with class 'articles'
