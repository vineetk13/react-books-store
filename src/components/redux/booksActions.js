import {HANDLE_SEARCH, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE} from './types';


export const fetchBooksRequest = () => {
    return {
        type:FETCH_BOOKS_REQUEST
    }
}
export const fetchBooksSuccess = (books) => {
    return {
        type:FETCH_BOOKS_SUCCESS,
        payload:books
    }
}
export const fetchBooksFailure = (error) => {
    return {
        type:FETCH_BOOKS_FAILURE,
        payload:error
    }
}
export const fetchBooks = (text) => {
    return function(dispatch) {
        dispatch(fetchBooksRequest());
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${process.env.REACT_APP_KEY}`)
        .then(res => res.json())
        .then(results => {
            const books = results.items;
            dispatch(fetchBooksSuccess(books));
        })
        .catch(error => {
            dispatch(fetchBooksFailure(error));
        })
    }
}
