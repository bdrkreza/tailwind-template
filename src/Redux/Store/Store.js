
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducers } from '../Reducer/Reducer';
const { createStore, combineReducers } = require("redux");

const combinedReducer = combineReducers({
    product: productsReducers,
})

export const store = createStore(combinedReducer, composeWithDevTools())