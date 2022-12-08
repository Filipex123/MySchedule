import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './Login/Login.component';
import Splash from './Splash/Splash.component';
import Home from './Home/Home.component';
import FinishedExams from './FinishedExams/FinishedExams.component';
import AddExams from './AddExams/AddExams.component';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FinishedExams" component={FinishedExams} />
        <Stack.Screen name="AddExams" component={AddExams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
