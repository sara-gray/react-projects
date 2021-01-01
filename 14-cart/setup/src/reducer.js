const reducer = (state, action) => {
	let newCart = []

	switch (action.type) {
		case 'LOADING':
			return { ...state, loading: true }

		case 'CLEAR_CART':
			return { ...state, cart: [] }

		case 'DISPLAY_ITEMS':
			return { ...state, cart: action.payload, loading: false }

		case 'REMOVE':
			newCart = state.cart.filter((item) => item.id !== action.payload)
			return { ...state, cart: newCart }

		case 'INCREASE':
			newCart = state.cart.map((item) => {
				const { id, amount } = item
				if (id === action.payload) {
					return { ...item, amount: amount + 1 }
				}
				return item
			})
			return { ...state, cart: newCart }

		case 'DECREASE':
			newCart = state.cart
				.map((item) => {
					const { id, amount } = item
					if (id === action.payload) {
						return { ...item, amount: amount - 1 }
					}
					return item
				})
				.filter((item) => item.amount !== 0)
			return { ...state, cart: newCart }

		case 'GET_TOTALS':
			let { amount, total } = state.cart.reduce(
				(cartTotal, item) => {
					const { price, amount } = item

					cartTotal.amount += amount
					cartTotal.total += price * amount
					return cartTotal
				},
				{
					amount: 0,
					total: 0,
				}
			)
			total = parseFloat(total.toFixed(2))
			return { ...state, amount, total }

		default:
			throw new Error('No matching action type in reducer')
	}
}

export default reducer
