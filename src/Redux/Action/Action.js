

export const addToCard = (payload) => {
    return {
        type: 'ADD_TO_CARD',
        payload
    }
}

export const removeFromProduct = (payload) => {
    return {
        type: 'REMOVE_FROM_PRODUCT',
        payload
    }
}
