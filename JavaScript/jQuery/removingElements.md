# Removing Elements Using jQuery

HTML:

```HTML
<li class="article-item">
    <header>Article #1</header>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente officiis beatae, ut consequuntur. Quos minus neque eius, nemo sunt excepturi eveniet amet veritatis voluptatibus corporis ea, blanditiis porro ad!</p>
    <h3>Sample Image Title here</h3>
    <img src="http://placehold.it/350x150" alt="Placeholder Image">
    <ul>
        <li class="bold">James</li>
        <li>Lily</li>
        <li>Harry</li>
    </ul>
    <p>Magnam ex autem doloremque, tempore mollitia atque aut delectus corporis rem similique voluptates omnis reiciendis vitae impedit exercitationem unde quaerat, doloribus voluptatibus molestias et veritatis sed optio repudiandae? Provident, voluptates.</p>
</li>
```

js:

```javascript
var articleItems;

articleItems = $('.article-item');

UL = articleItems.find('ul');

UL.remove();
// This will remove the unordered list and all of its children from the webpage, but not permanently, you can refresh and it should be there again
```
