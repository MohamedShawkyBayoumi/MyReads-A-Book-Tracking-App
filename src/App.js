import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  async componentDidMount(){

    try{
      let books = await BooksAPI.getAll();
      this.setState({books});
    }catch(e){
      console.log(e);
    }
  }

  changeShelf = (shelf, book) => {
    
    let result = [];

    BooksAPI.update(book, shelf).then(() => {

      book.shelf = shelf;

      result = this.state.books.filter(filtered => filtered.id !== book.id)
      this.setState({ books: result.concat(book) })

    })
  }
  
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>

                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <BookShelf title="currentlyReading" books={books} changeShelf={this.changeShelf}/>

                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BookShelf title="wantToRead" books={books} changeShelf={this.changeShelf}/>

                  <h2 className="bookshelf-title">Read</h2>
                  <BookShelf title="read" books={books} changeShelf={this.changeShelf}/>

                </div>
              </div>
              <div className="open-search">
                <Link to='/search' >Add a book</Link>
              </div>
            </div>
          
        )}/>
          
        <Route path='/search' render={() => (
          <SearchBooks books={books} searchQuery={this.searchQuery} changeShelf={this.changeShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;