import React from "react";
import Book from "./Book";

class BookList extends React.Component {
  render(){
    return(
      <>
        <div>Список доступных книг</div>
        <div style={styles.osn}>{
          this.props.books.map((book) =>(
            <Book book={book}/>
          ))
        }</div>
      </>
    )
  }
}

export default BookList;

const styles = {
  osn: {
    border: '1px solid black'
  }
}
