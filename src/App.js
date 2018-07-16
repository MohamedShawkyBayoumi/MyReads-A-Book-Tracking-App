import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
//import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'




class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []

  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      
    })

  }




  changeShelf = (shelf, book) => {
    
    let result = [];

    BooksAPI.update(book, shelf).then(() => {

      book.shelf = shelf;

      result = this.state.books.filter((filtered) => filtered.id !== book.id)
      this.setState({ books: result.concat(book) })

    })
  }

  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {/* What I did was passing a props "title" with the shelf value, and filter the books so only those with the 
                  matching shelf are displayed in the related component */}
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookShelf title="currentlyReading" books={this.state.books} changeShelf={this.changeShelf}/>

                <h2 className="bookshelf-title">Want to Read</h2>
                <BookShelf title="wantToRead" books={this.state.books} changeShelf={this.changeShelf}/>

                <h2 className="bookshelf-title">Read</h2>
                <BookShelf title="read" books={this.state.books} changeShelf={this.changeShelf}/>

                </div>
            </div>
            <div className="open-search">
            <Link to='/search' >Add a book</Link>
            </div>
        </div>
          
        )}/>
          
        <Route path='/search' render={() => (
          <SearchBooks books={this.state.books} searchQuery={this.searchQuery} displayForSearch={this.state.displayForSearch} changeShelf={this.changeShelf}/>
        )}/>
          
        
      </div>
    )
  }
}

export default BooksApp
