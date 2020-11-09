import axios from 'axios';

export default class UsuariosService {

    async getUsuarios() {
        return await axios.get('https://jsonplaceholder.typicode.com/users');
    }

    async postUsuarios(usuario) {
        return await axios.post('https://jsonplaceholder.typicode.com/users', usuario);
    }

    async putUsuarios(id, data) {
        return await axios.put('https://jsonplaceholder.typicode.com/users/' + id , data);
    }

}