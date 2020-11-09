import React, { Component } from 'react';
import './App.css';
import ListaUsers from './components/listausuarios/ListaUsers';
import FormUseres from './components/formusuarios/FormUsers';
import UsuariosService from './services/Usuarios.service';

export default class App extends Component {
  state = {
    data: [],
    ruta: "lista",
  }

  selecionarUsuario = id => {
    console.log("id: ", id);
    this.setState({
      ruta: 'form',
      usuarioSelecionado: id
    })
  }

  nuevoUsuario = () => {
    console.log("nuevo usuario");
    this.setState({
      ruta: 'form'
    })
  }

  guardarUsuario = async usuario => {
    const result = await UsuariosService.prototype.postUsuarios(usuario);
    console.log("response guardar:", result);
    if (result.status === 201) {
      const newUser = this.state.data.concat(result.data);
      this.setState({
        data: newUser,
        ruta: 'lista'
      })
    }else {
      alert("error al guardar los datos")
    }

  }
  actualizarUsuario = async (id, valores) => {
    const result = await UsuariosService.prototype.putUsuarios(id, valores);
    console.log("response Actualizar: ", result);
    if (result.status === 200) {
      const newData = this.state.data.map(x => x.id === id ? Object.assign(x, valores) : x);
      this.setState({
        ruta: 'lista',
        data: newData,
        usuarioSelecionado: null
      })
    } else {
      alert("error al actualizar los datos")
    }

  }

  render() {
    console.log(this.state);
    const { ruta, data, usuarioSelecionado } = this.state;
    const usuario = usuarioSelecionado && data.find(x => x.id === usuarioSelecionado)
    console.log("usuario Para editar: ", usuario);
    return (
      <div className="App">
        { ruta === 'lista' && <ListaUsers data={data} selectUser={this.selecionarUsuario} nuevoUsuario={this.nuevoUsuario}></ListaUsers>}
        { ruta === 'form' && <FormUseres guardarUsuario={this.guardarUsuario} usuario={usuario || {}} actualizarUsuario={this.actualizarUsuario}></FormUseres>}
      </div>
    );
  }

  async componentDidMount() {
    console.log("cargar usuarios");
    const usuarios = await UsuariosService.prototype.getUsuarios();
    this.setState({ data: usuarios.data });
  }

}


