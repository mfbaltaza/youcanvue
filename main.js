Vue.component('product-details', {
	props: {
		details: {
			type: Array,
			required: true
		}
	},
	template: `
	<ul>
		<li v-for="detail in details">{{ detail }}</li>
	</ul>
	`
})
Vue.component('product', {
	props: {
		premium: {
			type: Boolean,
			required: true,
			default: "Hi"
		}
	},
	template: `
	<div class="product">

        <div class="product-image">
          <img v-bind:src="image" alt="Product on sale image" />
        </div>

        <div class="product-info">
          <h1> {{ title }} </h1>
          <p> {{ goingSale }} </p>
          <p><b> <i> {{ description }} </i> </b></p>
					<p v-if="inStock">In Stock</p>
					<p v-else 
            :style="styleObject">Out of Stock</p>
			<p>Shipping: {{ shipping }}</p>

					<ul>
						<li v-for="detail in details">{{ detail }}</li>
					</ul>

					<p>Colors</p>

					<div v-for="(variant, index) in variants"
              :key="variant.variantId"
              class="color-box"
              :style="{ backgroundColor: variant.variantColor }"
              @mouseover="updateProduct(index)">
					</div>

					<p style="font-weight: 800;">Sizes</p>
					<ul>
						<li v-for="size in sizes">{{ size }}</li>
					</ul>

					<button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }">Add to cart</button>
					<button @click="removeFromCart">Remove from the cart</button>
        </div>
      </div>

			<div class="extra">
				<a :href="github">My Github</a>
			</div>
`,
data() {
	return {
		brand: 'Vue Mastery',
		product: 'Socks',
		description: 'Very comfortable ones',
		selectedVariant: 0,
		onSale: false,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "Green",
				variantImage: './assets/vmSocks-green-onWhite.jpg',
				variantQuantity: 10
			},
			{
				variantId: 2235,
				variantColor: "Blue",
				variantImage: './assets/vmSocks-blue-onWhite.jpg',
				variantQuantity: 0
			}
		],
		sizes: ["S", "M", "L", "XL"],
		styleObject: {
			textDecoration: 'line-through',
		},
		github: 'https://github.com/mfbaltaza',
	}
},
	methods: {
		addToCart() {
			this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
		},
		removeFromCart() {
			this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
		},
		updateProduct(index) {
			this.selectedVariant = index
			console.log(index)
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		},
		goingSale() {
			if (this.onSale) {
				return this.brand + ' ' + this.product + ' ARE ON SALE!!!'
			}
		},
		shipping() {
			if (this.premium) {
				return "Free"
			}
			return 2.99
		}
	}
})

const app = new Vue({
	el: '#app',
	data: {
		premium: true,
		cart: [],
	},
	methods: {
		updateCart(id) {
			this.cart.push(id)
		},
		removeItem(id) {
			for (var i = this.cart.length -1; i >= 0; i--) {
				if (this.cart[i] === id) {
					this.cart.splice(i, 1);
				}
				
			}
		}
	}
});