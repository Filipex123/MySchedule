import User from '../model/User.model';

export const getUserByLogin = async (
  email: string,
  senha: string,
): Promise<User | null> => {
  try {
    const resp = await fetch('http://192.168.0.11:3001/aluno/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, senha}),
    });
    const data = await resp.json();

    console.log({data});
    return data as User;
  } catch (error: any) {
    console.log(`Erro ao fazer requisicao: ${error}`);
  }
  return null;
};
