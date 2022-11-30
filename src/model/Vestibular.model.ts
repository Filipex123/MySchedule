import Materia from './Materia.model';

interface Vestibular {
  _id: string;
  nome: string;
  dataRealizacao: Date;
  materias: Materia[];
  isChecked: boolean;
}

export default Vestibular;
