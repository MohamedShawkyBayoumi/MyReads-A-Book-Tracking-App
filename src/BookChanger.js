import React from 'react'
import * as BooksAPI from './BooksAPI'

class BookChanger extends React.Component {
    state = { books: [] }
    
    changeShelf = (newBook,newShelf) => {
        BooksAPI.update(newBook,newShelf).then(response => {
            console.log(response)
        })
  
    }
      

    render(){
        const { book } = this.props
        return (
            <select onChange={(event) => this.changeShelf(book, event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}


export default BookChanger