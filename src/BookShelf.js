import React from 'react'
import BookChanger from './BookChanger'

const BookShelf = ({books, title, changeShelf}) => {
    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => book.shelf === title  && (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                        <BookChanger changeShelf={changeShelf} book={book}/>
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
    );
}


export default BookShelf;