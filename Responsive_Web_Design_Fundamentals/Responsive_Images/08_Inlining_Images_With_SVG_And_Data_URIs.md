# Inlining Images With Svg and Data URIs

"Inlining" a photo means that you will represent the picture as a really long string on your webpage like:

```HTML
<img src="DFSDgerGWEgwergwergWREGERGsfgSDFg
j4j2kh49fhe9fhwuiht872t8h">
```

This string can be as long as 5000 chars, but now that your image is in the code of your webpage, you don't need to worry about latency

***

Inline SVG images have great support on mobile and desktop browsers

Inlining does limit you on responsive design because you cannot use some css methods on inlined images

If you need to use css styling methods a lot, it is probably best to use external images
