import React from "react";

class Book extends React.Component{
  render(){
    const {
      book: { Name, ShortDescription, Pages, Language, ProcentProgress, Face, Author, MinPrice, GoodPrice }
    } = this.props;

    return (
      <>
        <div style={styles.osn}>
          <div><h4 style={styles.textc}>{Name}</h4></div>
          <img style={styles.img} src={Face}></img>
          <div style={styles.description}>
            Язык: {Language}<br/>
            Описание: {ShortDescription} - {Pages} стариц<br/>
            Цена минимальная/максимальная: {MinPrice} - {GoodPrice}<br/>
            Процент прогресса: {ProcentProgress}%<br/>
            Автор: {Author.Name}
            <img style={styles.imgA} src={Author.Photo}></img>
          </div>
        </div>
      </>
    )
  }
}

export default Book;


const styles = {
  osn: {
    border: '1px solid black',
    padding: '0 10px',
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
    borderRadius: '10%',
  },
  imgA: {
    width: '50px',
    display: 'inline-block',
    borderRadius: '20%',
  },
  description: {
    display: 'inline-block',
    verticalAlign: 'top',
    marginLeft: '10px',
  }
}
