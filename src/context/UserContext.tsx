import React, {createContext, ReactNode, useState} from 'react';
import User from '../model/User.model';
import Vestibular from '../model/Vestibular.model';
import {getAllExams, getUserByLogin} from '../utils/userAPI';

interface IUserContext {
  user: User | null;
  isLoading: boolean;
  exams: Vestibular[] | null;
  userLogin: (email: string, senha: string) => Promise<any>;
}

interface IUserProvider {
  children: ReactNode;
}

const contextInitialValues = {
  user: null,
  isLoading: true,
  userLogin: async () => {},
  exams: [],
};

export const UserContext = createContext<IUserContext>(contextInitialValues);

const UserProvider: React.FC<IUserProvider> = ({children}) => {
  const [user, setUser] = useState<User | null>(contextInitialValues.user);
  const [exams, setExams] = useState<Vestibular[] | null>(
    contextInitialValues.exams,
  );
  const [isLoading, setIsLoading] = useState(contextInitialValues.isLoading);

  const userLogin = async (email: string, senha: string) => {
    const loggedUser = await getUserByLogin(email, senha);
    console.log(JSON.stringify(loggedUser));
    if (loggedUser?.nome) {
      setIsLoading(false);
      return setUser(loggedUser);
    }

    throw new Error();
  };

  const examsLogin = async () => {
    const gettedExams = await getAllExams();
    if (gettedExams) {
      setIsLoading(false);
      return setExams(gettedExams);
    }

    throw new Error();
  };

  const providerValues = {
    isLoading,
    user,
    userLogin,
    examsLogin,
    exams,
  };

  return (
    <UserContext.Provider value={providerValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
