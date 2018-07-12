import React from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends React.Component {

    state = {
        query: ''
    }


    updateQuery = (query) => {
        this.setState({ query })
        BooksAPI.search(query).then(books => console.log(books))
    }

    






    render(){
/*
        let showingBooks
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingBooks = this.props.books.filter((book) => match.test(book.name))
        } else {
            showingBooks = this.props.books
        }

        //showingBooks.sort(sortBy('name'))
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
                    {JSON.stringify(this.state)}
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks