import Assunto from './Assunto.model';

interface Materia {
  _id: string;
  nome: string;
  assuntos: Assunto[];
  isChecked: boolean;
}
export default Materia;
