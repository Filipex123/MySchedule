import React, {createContext, ReactNode, useState} from 'react';
import User from '../model/User.model';
import {getUserByLogin} from '../utils/userAPI';

interface IUserContext {
  user: User | null;
  isLoading: boolean;
  userLogin: (email: string, senha: string) => Promise<any>;
}

interface IUserProvider {
  children: ReactNode;
}

const contextInitialValues = {
  user: null,
  isLoading: true,
  userLogin: async () => {},
};

export const UserContext = createContext<IUserContext>(contextInitialValues);

const UserProvider: React.FC<IUserProvider> = ({children}) => {
  const [user, setUser] = useState<User | null>(contextInitialValues.user);
  const [isLoading, setIsLoading] = useState(contextInitialValues.isLoading);

  const userLogin = async (email: string, senha: string) => {
    const loggedUser = await getUserByLogin(email, senha);
    console.log(JSON.stringify(loggedUser));
    if (loggedUser) {
      setIsLoading(false);
      return setUser(loggedUser);
    }

    throw new Error();
  };

  const providerValues = {
    isLoading,
    user,
    userLogin,
  };

  return (
    <UserContext.Provider value={providerValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
