import User from '../model/User.model';

const ENDPOINT_ALUNO = 'http://172.16.233.195:3001/aluno';

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
