import React, { Component } from 'react';

export default class FormUsers extends Component {
    state = {}
    enviarForm = e =>{
        e.preventDefault();
        const { usuario, guardarUsuario, actualizarUsuario } = this.props;
        console.log(e);
        if(usuario.id){
            //actualizando usuario
            actualizarUsuario(usuario.id, this.state)
        }else{
            //guardando nuevo usuario
            guardarUsuario(this.state);
        }
        e.target.reset();
    }

    cambioText = ({ target }) =>{
        this.setState({
            [target.name]: target.value
        })
    }
    render(){
        console.log(this.state);
        const { usuario } = this.props;
        return (
            <form onSubmit={this.enviarForm}>
                <input defaultValue={usuario.name} name="name" onChange={this.cambioText} type="text"/>
                <input defaultValue={usuario.username} name="username" onChange={this.cambioText} type="text"/>
                <input defaultValue={usuario.email} name="email" onChange={this.cambioText} type="text"/>
                <button type="submit">Enviar</button>
            </form>
        );
    }
}