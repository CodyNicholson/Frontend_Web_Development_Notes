#Document Object Model

The DOM is best described as a tree

```
Parent  Child  GChild GGChild GGGChild

body --> div --> div-->form-->input
                    L->  ul-->  li
                           L->  li
```

Body is the parent of the first div in this DOM tree, and that first div has two child divs that are both siblings

There are two pairs of siblings: form & ul, and li & li

Notice input is not a sibling of li & li even though they are on the same level because they do not share the same parent
