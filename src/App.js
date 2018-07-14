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
    books: [],
    displayForSearch: []

  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      //console.log(books)
      this.setState({ books })
      
    })

  }



/*
  searchQuery = (query) => {
    if (query !== '') { 
      BooksAPI.search(query).then(books => {
        if (books.error !== 'empty query') {
          this.setState({ displayForSearch: books })
        } else {
          this.setState({ displayForSearch: [] })
        }
      })
    }
  }

  */

  searchQuery = (query) => {
    if (query !== '') { // you need to set condition for query to prevent send '' empty query to api 
        // you will get undefiend error
        BooksAPI.search(query).then(books => {
            console.log(books)
            console.log(this.props.displayForSearch)
            if (books.error !== 'empty query') {
              this.setState({ displayForSearch: books })
            } else {
              this.setState({ displayForSearch: [] })
            }
            
        })
    }
  }




  changeShelf = (book, shelf) => {
    
    BooksAPI.update(book, shelf).then(() => {
      console.log(book)
      console.log(shelf.shelf)

      shelf.shelf = book;

      console.log(shelf)

      //this.setState({ books: [shelf] })
      

      let result = this.state.books.filter((filtered) => filtered.id !== book.id)
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
          <SearchBooks searchQuery={this.searchQuery} displayForSearch={this.state.displayForSearch} changeShelf={this.changeShelf}/>
        )}/>
          
        
      </div>
    )
  }
}

export default BooksApp
