import React from "react";
import Book from "./BookCart";

class BookList extends React.Component {
  constructor(props){
    super(props);
    this.state = { onlyRus: false };
  }

  toggleRus(){
    this.setState({ onlyRus: !this.state.onlyRus })
  }

  render(){
    return(
      <>
        <button onClick={() => this.toggleRus()} style={styles.buttonShow}>
          Show only Russian
        </button>
        {
          this.props.books
          .filter(b => b.Language == 'Russian' || !this.state.onlyRus)
          .map((book) =>(
            <div key={book.id} style={styles.item}>
              <Book book={book}/>
            </div>
          ))
        }
      </>
    )
  }
}

export default BookList;

const styles = {
  item: {
    borderBottom: '1px solid black'
  },
  buttonShow: {
    padding: '5px',
    margin: '5px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    background: 'black',
    color: 'white',
  }
}
