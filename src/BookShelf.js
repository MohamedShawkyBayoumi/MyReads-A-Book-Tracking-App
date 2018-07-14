import React from 'react'
import BookChanger from './BookChanger'




class BookShelf extends React.Component {


    render(){
        return (
            <div className="bookshelf">
                <div className="bookshelf-books">
                <ol className="books-grid">
                {/*If the book shelf matchs the shelf title then render it */}
                    {this.props.books.map((book) => book.shelf === this.props.title  && (
                        
                        <li key={book.title}>
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <BookChanger changeShelf={this.props.changeShelf} books={this.props.books}/>
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

export default BookShelf