import React from 'react'
import * as BooksAPI from './BooksAPI'

class BookChanger extends React.Component {

    changeShelf = (newBook,newShelf) => {
        BooksAPI.update(newBook,newShelf).then(response => {
            console.log(response)
        })
  
    }
      

    render(){
        return (
            <select onChange={(event) => this.changeShelf(event.target.value)}>
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