import React from 'react'


class BookShelf extends React.Component {
    render(){
        return (
            <div className="bookshelf">
                <div className="bookshelf-books">
                <ol className="books-grid">
                {/*If the book shelf matchs the shelf title then render it */}
                    {this.props.books.map((book) => book.shelf === this.props.title && (
                        <li key={book.title}>
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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

export default BookShelf