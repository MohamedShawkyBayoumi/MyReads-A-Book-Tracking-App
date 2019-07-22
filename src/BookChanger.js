import React from 'react';

const BookChanger = ({changeShelf, book}) => {
    return (
        <select value={book.shelf} onChange={event => changeShelf(event.target.value, book)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    );
}


export default BookChanger;