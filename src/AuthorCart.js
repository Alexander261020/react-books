import React from "react";

class AuthorCart extends React.Component{
  render(){
    const {
      author: { Name, Photo }
    } = this.props

    return(
      <>
        <div style={styles.osn}>
          <img style={styles.imgA} src={Photo}></img>
          <div style={styles.description}>
            Автор: {Name}
          </div>
        </div>
      </>
    )
  }
}

export default AuthorCart;

const styles = {
  osn: {
    padding: '5px 10px 10px',
    margin: '5px',
    borderTop: '1px solid black',
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
