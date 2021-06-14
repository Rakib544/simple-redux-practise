import { loadDataReducer } from "./reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
const { createStore, applyMiddleware } = require("redux");



const middleWire = [thunk];

export const store = createStore(loadDataReducer, composeWithDevTools(applyMiddleware(...middleWire)));