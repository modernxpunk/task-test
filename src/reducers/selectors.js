export const selectAllProducts = state => state.products.data
export const selectAllProductsInCart = state => {
    const cartsIDs = Object.keys(state.products.carts).map(Number)
    return state.products.data.filter((({id}) => cartsIDs.includes(id)))
}

export const selectAllCountsInCart = state => {
    return state.products.carts
}
export const sumPricesCarts = state => {
    return Object.entries(state.products.carts).reduce((prev, [id, count]) => {
        return prev + state.products.data.find(product => +id === product.id).price * count
    }, 0)
}

export const isLoadingProducts = state => state.products.isLoading
export const erorrProducts = state => state.products.erorr