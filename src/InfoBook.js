import React from "react";
import ReactDOM from "react-dom";

class InfoBook extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOpen: false};
  }
  toggle(){
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return(
      <>
        <div style={styles.buttongreen} >
          <a onClick={() => this.toggle()}>О книге</a>
        </div>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div style={styles.info}>This is learning project</div>
              <div style={styles.buttonclose}>
                <a onClick={() => this.toggle()}>Закрыть</a>
              </div>
            </div>,
            document.getElementById("info-book")
          )
        }
      </>
    )
  }
}

export default InfoBook;

const styles = {
  buttongreen: {
    border: '1px solid black',
    borderRadius: '5px',
    right: '0px',
    padding: '8px',
    background: 'green',
    bottom: '0px',
    cursor: 'pointer',
    textAlign: 'center',
    margin: '10px 0',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '2',
    textAlign: 'center',
  },
  info: {
    color: 'white'
  },
  buttonclose: {
    cursor: 'pointer',
    position: 'absolute',
    color: 'white',
    bottom: '0',
    right: '0',
    padding: '10px 20px',
    border: '1px solid white',
    borderRadius: '5px',
    margin: '10px'
  }
}
