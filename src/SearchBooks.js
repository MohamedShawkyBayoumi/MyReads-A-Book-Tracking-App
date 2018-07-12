import React from 'react'
import { Link } from 'react-router-dom'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'


let showingBooks = [];

class SearchBooks extends React.Component {

    state = {
        books: []
    }


updateQuery = (query) => {
        if (query !== '') { // you need to set condition for query to prevent send '' empty query to api 
            // you will get undefiend error
            BooksAPI.search(query).then(books => {
                console.log(books)
                this.setState({ books })
                if (books.error !== 'empty query') {
                    showingBooks = this.state.books;

                } else {
                    this.setState({ books: [] })
                    showingBooks = [];
                }

                
            })
        }
    }

    render(){

        /*
        let showingBooks
        if(this.state.books){
            showingBooks = this.state.books.filter((book) => book.title)
        } else {
            showingBooks = this.state.books
        }
*/

        


        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='./' className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {showingBooks.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: book.imageLinks === undefined ? `url(https://s7.postimg.cc/shls4dbcb/persons.png)` : `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                    </select>
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