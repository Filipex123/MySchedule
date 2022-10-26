export const getUser = async (
  email: string,
  senha: string,
): Promise<boolean> => {
  try {
    const resp = await fetch('http://172.16.231.230:3001/aluno/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, senha}),
    });
    const data = await resp.json();

    console.log({data});
    return data;
  } catch (error: any) {
    console.log(`Erro ao fazer requisicao: ${error}`);
  }

  return false;
};
