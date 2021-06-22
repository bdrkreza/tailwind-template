
import { NewProduct } from "../../assets/Data/productData";


const initState = {
    productData: NewProduct,
    singleProduct: [],
}


export const productsReducers = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TO_CARD": {
            const newState = {
                ...state,
                singleProduct: [...state.singleProduct, action.payload]
            };
            return newState;
        }
        case "REMOVE_FROM_PRODUCT": {
            const newState = {
                ...state,
                singleProduct: state.singleProduct.filter(item => item.id === action.payload.id)
            };
            return newState;

        }
        default: {
            return state;
        }
    }
}

// export const productsReducers = (state = initState, action) => {
//     switch (action.type) {
//         case "PRODUCT":
//             return { ...state, product: state.productData.find(product => product.id === parseInt(action.id)) }
//         default:
//             return state;
//     }
// }