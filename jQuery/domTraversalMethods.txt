Example DOM Tree, all names are ID's of the element

     Joe
      |
    Frank
    /   \
  Bart  Cody
  /  \      \
Susan Tom   Roy

There are many built in methods in jQuery to select different elements but going up and down the DOM tree



.parent():

$('#Cody').parent();
// Would return 'Frank' because .parent() will only go one element up the DOM tree


.parents():

$('#Roy').parents();
// Will return 'Joe', 'Frank', and 'Cody' since they are all parents of 'Roy'

$('#Roy').parents('#Frank');
// Will only return 'Frank' since that is the only parent you are looking for

$('#Roy').parents('#Bart')
// Will return nothing since 'Bart' is not a parent of 'Roy'


.children():

$('#Frank').children();
// Will return 'Bart' and 'Cody' because it only goes one element down the DOM tree to select nodes


.find():

$('#Frank').find();
// Will return ALL children of the elements with id='Frank', so 'Bart', 'Cody', 'Susan', 'Tom', 'Roy'


.siblings():

$('#Susan').siblings();
// Will return 'Tom' because 'Tom' and 'Susan' have the same parent



Example code from lesson:


var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = articleList.siblings('h1');

kids = articleList.find('*'); // '*' means all, so select all children in this case

parents = articleList.parents('div');