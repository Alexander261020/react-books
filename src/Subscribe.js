import React from "react";

class Subscribe extends React.Component{
  constructor (props){
    super(props);
    this.state = { isOn: false };
  }

  toggle(){
    this.setState({ isOn: !this.state.isOn });
  }

  render(){
    if (this.state.isOn){
      return (
        <div style={styles.osnOn} onClick={() => this.toggle()} >
          Отписаться
        </div>
      )
    }

    return(
      <div style={styles.osn} onClick={() => this.toggle()} >
        Подписаться
      </div>
    )
  }
}

export default Subscribe;

const styles = {
  osn: {
    border: '1px solid black',
    borderRadius: '5px',
    right: '0px',
    padding: '8px',
    background: 'green',
    bottom: '0px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  osnOn: {
    border: '1px solid black',
    borderRadius: '5px',
    right: '0px',
    padding: '8px',
    background: 'red',
    bottom: '0px',
    cursor: 'pointer',
    textAlign: 'center',
  }
}
