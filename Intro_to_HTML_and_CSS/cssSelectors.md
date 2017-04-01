# CSS Selectors

Id selector: #idName

Class selector: .className

Classes are more useful than id's because they are supported in every browser

You can add multiple classes to the same web element as long as you separate them by a space, example: class="classOne classTwo"

-

Tag selector: img, p, div, body, html, a, span, h1, h2
// This is best for changing properties unique to every element of a certain tag


Attribute selector: [anyAttributeName="anyAttributeValue"]
// This could be better than classes, but is not supported by IE6


Positional Selector: nth-child(2)
// Will style every second element of the html file

```
Other Pseudo Selectors: empty
// Will style all elements with nothing between there tags, example: <h1></h1>, <p></p>
```

-

Other useful ways of selecting elements:

```
.classNameOne.classNameTwo
// This will only select elements that have both of these classes

img[customAttribute]
// This will only select <img> elements that have the attribute "customAttribute"

#someId:after
// This will add content after every element with the id "someId"

.className > h2
// Selects <h2> elements that are children of elements with that class className

h2 + p
// Selects p elements that directly follow h2 elements

li ~ li
// Selects li elements that are siblings and following another li element
```
