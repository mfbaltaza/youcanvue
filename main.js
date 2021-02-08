const app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		description: 'Very comfortable ones',
		image: './assets/vmSocks-green-onWhite.jpg',
		inventory: 100,
		onSale: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "Green"
			},
			{
				variantId: 2235,
				variantColor: "Blue"
			}
		],
		sizes: ["S", "M", "L", "XL"],
		github: 'https://github.com/mfbaltaza'
	}
});