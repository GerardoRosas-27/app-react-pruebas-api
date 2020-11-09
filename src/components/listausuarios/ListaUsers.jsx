import React, { Component } from 'react';
import Cabecera from './Cabecera';
import Lista from './Lista';

export default class ListaUsers extends Component {
    render(){
        const { data, selectUser, nuevoUsuario } = this.props;
        return(
            <div>
                <Cabecera nuevoUsuario={nuevoUsuario}></Cabecera>
                <Lista data={data} selectUser={selectUser}></Lista>
            </div>
            
        );
    }
}