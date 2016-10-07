#Adding Child Elements

```javascript
var fam1, fam2, bruce, madison, hunter;

fam1 = $('family1');

fam2 = $('<div id="family2"><h1>Family 2</h1></div>');
// Creates a jQuery object containing the code for the family2 div

bruce = $('div id="bruce"><h2>Bruce</h2></div>');
// Creates a jQuery object containing the code for the bruce div

madison = $('div id="madison"><h3>Madison</h3></div>');
// Creates a jQuery object containing the code for the madison div

hunter = $('div id="hunter"><h4>Hunter</h4></div>');
// Creates a jQuery object containing the code for the hunter div

fam2.insertAfter(fam1);
// Inserts the fam2 div as the next sibling of the fam1 div

fam2.append(bruce);
// Inserts the bruce div as the last child of the fam2 div

bruce.append(madison);
// Inserts madison as the last child of the bruce div

bruce.append(hunter);
// Inserts hunter as the last child of the bruce div, behind the madison div which is the hunter div's sibling
```
