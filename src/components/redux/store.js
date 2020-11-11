import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import booksReducer from './booksReducers';

const store = createStore(booksReducer,applyMiddleware(thunk));

export default store;