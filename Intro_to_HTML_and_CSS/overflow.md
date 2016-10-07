#Overflow

Too much text for a viewport?

Add overflow in CSS to enable the user to scroll through all of it rather than have it take up the whole page

This does not mean they will scroll through the page, it means that whatever container you have your text in will have its own scrolling capabilities to keep your webpage compact

Example:


.reading-area
{
    height: 100%;
    width: 100%;
    overflow: auto;
}
