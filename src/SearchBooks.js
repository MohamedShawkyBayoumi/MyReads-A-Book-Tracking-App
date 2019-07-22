import React from 'react'
import { Link } from 'react-router-dom'
import BookChanger from './BookChanger'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

    state = {
        displayForSearch: []
    }

    searchQuery = async query => {
        const { books } = this.props;
        
        if (query !== '') {
            try{

                let res = await BooksAPI.search(query);
                !res || res.error ? this.setState({displayForSearch: []}) :
                    res.map(foundBook => {
                            
                        books.map(book => {
                            if(foundBook.id === book.id){
                                foundBook.shelf = book.shelf
                            } else {
                                foundBook.shelf = 'none';
                            }
                        })
                        return foundBook;
                    })
                    
                    this.setState({ displayForSearch: res })

            }catch(e){
                console.log(e);
            }
        } else {
            this.setState({ displayForSearch: [] })
        }
    }
    
    render(){
        const { displayForSearch } = this.state;
        const { query, changeShelf } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='./' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={event => this.searchQuery(event.target.value)}
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {displayForSearch && displayForSearch.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: book.imageLinks === undefined ? `url(https://s7.postimg.cc/shls4dbcb/persons.png)` : `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <BookChanger book={book} changeShelf={changeShelf} />
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.author}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks