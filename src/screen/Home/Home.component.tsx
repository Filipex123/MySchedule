import React from 'react';
import {Text, View} from 'react-native';

const Home: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Text style={{justifyContent: 'center', alignContent: 'center'}}>
        Home
      </Text>
    </View>
  );
};

export default Home;
