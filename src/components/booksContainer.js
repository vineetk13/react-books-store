import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import { fetchBooks } from './redux/booksActions';

const BooksContainer = (props) => {
    const [searchText, setSearchText] = useState("");
    const searchHandle = (e) => {
        if(e.target.value!=="")
            props.fetchBooks(e.target.value);
        setSearchText(e.target.value);
    }
    return (
        <div className="books-container">
            <form className="search">
                <input 
                className="search-input" 
                type="text" 
                value={searchText}
                onChange={e=>searchHandle(e)}
                placeholder="Search books using name or author"/>
                
            </form>
            <div className="books-list">
                {searchText!=="" ?
                    props.state.books.map(book=>{
                        return (
                            <div className="book-items">
                                <div className="image" style={{border:"2px solid red"}}>{book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.smallThumbnail} /> : null}</div>
                                <div className="bookInfo">
                                    <div>
                                        <p className="title">{book.volumeInfo.title}</p>
                                        <p className="subtitle">{book.volumeInfo.subtitle}</p>
                                        <p className="authors">{book.volumeInfo.authors}</p>
                                    </div>
                                    <div>
                                       {book.saleInfo.retailPrice ?  <p className="price">&#x20B9; {book.saleInfo.retailPrice.amount}</p> : <p className="nostock">No Stock</p>}
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div>No results found :(</div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state:state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBooks:(text)=>dispatch(fetchBooks(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);