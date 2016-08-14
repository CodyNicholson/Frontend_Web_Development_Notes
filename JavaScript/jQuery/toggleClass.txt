.toggleClass():


var featuredArticle;

featuredArticle = $('.featured').toggleClass();
// The toggleClass() method will remove the class from the webpage temporarily so you can see what effects that class has on your webpage



.next():

var article2, article3;

article2 = $('.featured');

article3 = article2.next();
// .next() will go to the next sibling of the node with class 'featured'

article2.toggleClass('featured');
// Temporarily removes the featured class from article2

article3.toggleClass('featured');
// If article3 does not have the featured class, it will temporarily have the class
// If article3 does have the class it will temporarily not have that class