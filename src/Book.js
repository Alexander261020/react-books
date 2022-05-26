import React from "react";

class Book extends React.Component{
  render(){
    return (
      <>
        <div style={styles.osn}>
          <div><h4 style={styles.textc}>{this.props.book.name}</h4></div>
          <img style={styles.img} src={this.props.book.face}></img>
          <div style={styles.description}>Описание: {this.props.book.shortDescription}</div>
        </div>
      </>
    )
  }
}

export default Book;


const styles = {
  osn: {
    border: '1px solid black'
  },
  textc: {
    textAlign: 'center',
    margin: '2px',
    padding: '0px',
    color: 'red',
  },
  img: {
    width: '100px',
    display: 'inline-block',
  },
  description: {
    display: 'inline-block',
    verticalAlign: 'top',
    marginLeft: '10px',
  }
}
