CSS:


img, embed, object, video
{
    max-width:100%;
    max-height:100%;
}

// Setting these elements to max-width 100% and max-height 100% means that these elements will occupy 100% of their containers
// These containers could be divs, or the whole body, or anything that contains web elements


.nav_button
{
    min-width: 48px;
    min-height: 48px;
}

// This will make it so that any element with the class nav_button will never be smaller than 48px
// This is important because you never want buttons to be smaller than 40px x 40px



It is always smart to start developing for the smallest device first

DIP stands for Device Independant Pixal

The browser uses DIPs to relate pixals to a real distance

One DIP will take up the same amount of space on any device

On the other hand, Hardware Pixals are the amount of pixals wide/tall a device is, which is different across various devices