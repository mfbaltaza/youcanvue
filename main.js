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
				variantColor: "Green",
				variantImage: './assets/vmSocks-green-onWhite.jpg'
			},
			{
				variantId: 2235,
				variantColor: "Blue",
				variantImage: './assets/vmSocks-blue-onWhite.jpg'
			}
		],
		sizes: ["S", "M", "L", "XL"],
		cart: 0,
		github: 'https://github.com/mfbaltaza',
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		updateProduct(variantImage) {
			this.image = variantImage
		}
	},
});