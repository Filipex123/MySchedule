import React, {createContext, ReactNode, useState} from 'react';
import User from '../model/User.model';
import {getUserByLogin} from '../utils/userAPI';

interface IUserContext {
  user: User | null;
  isLoading: boolean;
  getUser: (email: string, senha: string) => void;
}

interface IUserProvider {
  children: ReactNode;
}

const contextInitialValues = {user: null, isLoading: true, getUser: () => {}};

export const UserContext = createContext<IUserContext>(contextInitialValues);

const UserProvider: React.FC<IUserProvider> = ({children}) => {
  const [user, setUser] = useState<User | null>(contextInitialValues.user);
  const [isLoading, setIsLoading] = useState(contextInitialValues.isLoading);

  const getUser = async (email: string, senha: string) => {
    const loggedUser = await getUserByLogin(email, senha);
    console.log(loggedUser);
    setUser(loggedUser);
    setIsLoading(true);
  };

  const providerValues = {
    isLoading,
    user,
    getUser,
  };

  return (
    <UserContext.Provider value={providerValues}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
