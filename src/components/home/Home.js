import React, { Component } from 'react';


class Home extends Component {

  render() {
    const { dataUser } = this.props;
    console.log(dataUser);
    return (
      <div className="Home">
        <h3>Hola soy el Home</h3>
        { dataUser.map(usuario =>  <p>{usuario.name ? usuario.name : ''}</p> ) }
      </div>
    )
  }
}

export default Home;