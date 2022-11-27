import React from 'react';
import UserProvider from './src/context/UserContext';
import RootNavigator from './src/screen/RootNavigation';

const App = () => {
  return (
    <UserProvider>
      <RootNavigator />
    </UserProvider>
  );
};

export default App;
