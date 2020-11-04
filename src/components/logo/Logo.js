import React, {Component} from 'react';

class Logo extends Component {
 
  render(){
    const { datosUsuario } = this.props;
    return (
      <div className="logo">
        <p>{ datosUsuario.name }</p>
        <p> { datosUsuario.username }</p>
        <button onClick={ this.onMensaje } ></button>
      </div>
    )
  }
}

export default Logo;