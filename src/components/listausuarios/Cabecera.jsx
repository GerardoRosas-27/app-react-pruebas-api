import React, { Component } from 'react';

export default class Cabecera extends Component {

    render(){
        const { nuevoUsuario } = this.props;
        return (
            <header>
                <h1>Usuarios</h1>
                <button onClick={nuevoUsuario} >Nuevo usuario</button>
            </header>
        )
    }
}