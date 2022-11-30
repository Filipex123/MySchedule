import Vestibular from './Vestibular.model';

interface User {
  _id: string;
  nome: string;
  dataNasc: Date;
  genero: string;
  nivelEstudo: string;
  email: string;
  senha: string;
  vestibulares: Vestibular[];
}

export default User;
