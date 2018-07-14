import React from 'react'



class BookChanger extends React.Component {
    state = { books: [] }
    
    
      

    render(){
        const { changeShelf } = this.props
        const  book  = this.props

        return (
            
            <select onChange={(event) => changeShelf(book, event.target.value)}>
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