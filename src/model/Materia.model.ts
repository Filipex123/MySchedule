import Assunto from './Assunto.model';

interface Materia {
  nome: string;
  assuntos: Assunto[];
  isChecked: boolean;
}
export default Materia;
