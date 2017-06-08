# Adding Arrays To Objects

```html
var gems =
[
	{
		name: 'Dodecahedron Gem',
		price: 2.95,
		description: '. . .',
		images:
		[
			{
				full: 'dodecahedron-01-full.jpg',
				thumb: 'dodecahedron-01-thumb.jpg'
			},
			{
				full: "dodecahedron-02-full.jpg",
				thumb: 'dodec-thumb.jpg'
			}
		]
	}
]
```

### Indexing The Object's Array

```
{{product.images[0].full}}
```
