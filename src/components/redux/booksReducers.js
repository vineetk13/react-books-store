import {HANDLE_SEARCH, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE} from './types';

const initialState = {
    loading:false,
    books:[],
    error:""
}

const booksReducer = (state = initialState,action) => {
    switch (action.type){
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books:action.payload,
                error:""
            }
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books:[],
                error:action.payload
            }
    }
}

export default booksReducer;