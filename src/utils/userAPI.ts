import User from '../model/User.model';
import Vestibular from '../model/Vestibular.model';

const ADDRESS = '192.168.0.50';
const ENDPOINT_ALUNO = `http://${ADDRESS}:3001/aluno`;
const ENDPOINT_EXAMS = `http://${ADDRESS}:3001/exams`;

export const getUserByLogin = async (
  email: string,
  senha: string,
): Promise<User | null> => {
  try {
    const resp = await fetch(`${ENDPOINT_ALUNO}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, senha}),
    });
    const data = await resp.json();

    console.log(JSON.stringify(data));

    return data as User;
  } catch (error: any) {
    console.log(`Erro ao fazer requisicao: ${error}`);
  }
  return null;
};

export const checkUserExam = (
  id: string | undefined,
  examId: string | undefined,
  newValue: boolean,
): void => {
  try {
    console.log('ENTROU NO CHECK API');
    fetch(`${ENDPOINT_ALUNO}/${id}/checkExam/${examId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({newValue}),
    });
  } catch (error: any) {
    console.log(`Erro ao fazer requisicao: ${error}`);
  }
};

export const getAllExams = async () => {
  try {
    const resp = await fetch(`${ENDPOINT_EXAMS}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await resp.json();

    console.log(JSON.stringify(data));

    return data as unknown as Vestibular[];
  } catch (err: any) {
    console.log(err);
  }

  return null;
};

export const getFinishedExams = async () => {
  try {
    const resp = await fetch(`${ENDPOINT_ALUNO}/doneExams`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await resp.json();

    console.log(JSON.stringify(data));

    return data as unknown as Vestibular;
  } catch (err: any) {
    console.log(err);
  }

  return null;
};
