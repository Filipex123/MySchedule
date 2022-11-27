import Materia from './Materia.model';

interface Vestibular {
  nome: string;
  dataRealizacao: Date;
  materias: Materia[];
  isChecked: boolean;
}

export default Vestibular;
