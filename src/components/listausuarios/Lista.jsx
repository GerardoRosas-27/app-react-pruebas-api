import React, { Component } from 'react';

export default class Lista extends Component {
    editarUser = id => e =>{
        const { selectUser } = this.props;
        console.log("se le esta pazando el usuario: ", id);
        selectUser(id);
    }

    render() {
        const { data } = this.props;
        console.log("data Lista: ", data);

        return (
            <ul>
                { data.map(item =>
                    <li key={item.id}> { item.name} <button onClick={this.editarUser(item.id)}>Editar</button></li>)
                }

            </ul>
        )
    }

}