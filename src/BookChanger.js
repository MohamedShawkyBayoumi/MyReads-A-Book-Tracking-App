import React from 'react'



class BookChanger extends React.Component {
    
    
    
      

    render(){
        
            const { changeShelf, book } = this.props;

        return (
            
            <select onChange={(event) => changeShelf(event.target.value, book)}>
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