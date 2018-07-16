import React from 'react'
import { Link } from 'react-router-dom'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import BookChanger from './BookChanger'
import * as BooksAPI from './BooksAPI'



class SearchBooks extends React.Component {

    state = {
        displayForSearch: []
    }


    searchQuery = (query) => {
        if (query !== '') {
            

            /*
            Get a list of books from the search method of the API
            If there is no result, clear the displayed book array
            otherwise, loop over the list of returned book and compare it with the already shelved books
            Set the shelf of the displayed book and update the result list
            */
            BooksAPI.search(query).then(books => {
                if (!books || books.error) this.setState({displayForSearch: []})
                else {
                    books.map(foundBook => {
                        this.props.books.forEach(book => {
                            if(foundBook.id === book.id){
                                foundBook.shelf = book.shelf
                            } else {
                                foundBook.shelf = 'none';
                            }
                        })
                        return foundBook;
                    })
                    
                    this.setState({ displayForSearch: books })
                }
                
            })
        } else { // if empty query, clear the displayed books
            this.setState({ displayForSearch: [] })
        }
    }
    

    render(){

        const { displayForSearch } = this.state;
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
                    value={this.props.query}
                    onChange={(event) => this.searchQuery(event.target.value)}
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
                                    <BookChanger book={book} changeShelf={this.props.changeShelf} />
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