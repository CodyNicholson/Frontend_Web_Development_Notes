# Adding Reviews To Products

```js
app.controller("StoreController", function()
{
	this.products =
	[
		{
			name: 'Awesome Multi-touch Keyboard',
			price: 250.00,
			description: "...",
			images: [...],
			reviews:
			[
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		}
	]
}
```

As you can see in the above block, there is now a "reviews" array for our products
