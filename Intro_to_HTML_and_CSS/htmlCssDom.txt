HTML is a structural language for creating webpages, and CSS is a language for styling HTML webpages

Both of these languages have their own unique rules and synax


Hyper Text Markup Language (HTML):


A html "Tag" is the basic word in the html language, think of a tag as the main building block of the language

The browser turns the tags into elements the form a tree

The browser knows how to do this because of the Document Object Model, otherwise known as the DOM



Document Object Modal (DOM):


Document Object Modal is the standard convention for interacting with elements in HTML

The tree you can see for a webpage in dev tools is the DOM tree the browser built from the html document it was provided

Each HTML tag creates an element in the DOM that the browser uses to display the page

An element stretches from start tag to end tag and everything between them is content

Content can be empty, text, or another element

Each tag has a name/type: img, p, div, etc.

Each tag can have attributes with values like this div tag has a class attribute with the value "main": <div class="main">...</div>

HTML tags and attributes define the structure and content of the page



Cascading Style Sheet (CSS):


CSS stands for Cascading Style Sheet and defines the style of the page, like fonts, colors, positions of elements, etc

CSS is a language with its own syntax and rules that change how elements look on a page

A CSS file must be included in the html files where you want to style

In CSS, when you want to refer to a class, say a class called "main" you write:

.main
{
    cssAttribute: newValue;
}

If "main" was an Id then you would write:

#main
{
    cssAttribute: newValue;
}

Including a CSS file in your html document:

In your <head> tag put:

<link rel="stylesheet" text="text/css" href="nameOfCssFile.css">



For orgnizations sake, every web element is box shaped on a web page


Start every html file with: <!DOCTYPE html>, and put all the code for that page between an <html> tag