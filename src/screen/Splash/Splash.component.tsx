import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {APP_COLOR} from '../Login/constants';

const Splash: React.FC = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('Login');
  }, 3000);

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: APP_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <View>
        <Text style={{color: 'white', fontSize: 52, marginBottom: 28}}>
          MySchedule
        </Text>
      </View>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default Splash;
