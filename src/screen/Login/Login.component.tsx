import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {APP_COLOR} from './constants';
import styles from './Login.styles';

const Login: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerShape} />
      {/* <View>
        <View style={styles.circleShape} />
        <View style={styles.circleShape} />
        <View style={styles.circleShape} />
      </View> */}

      <View style={styles.outerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>MySchedule</Text>
        </View>
        <View style={styles.line} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={() => {}}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
        />

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {}}
            title="Sign In"
            color={APP_COLOR}
            accessibilityLabel="This is the button to login in app"
          />
        </View>
        <View style={styles.orContainer}>
          <View style={styles.smallLine} />
          <Text style={{color: APP_COLOR}}>or</Text>
          <View style={styles.smallLine} />
        </View>

        <View style={styles.signupContainer} onTouchStart={() => {}}>
          <Text style={styles.signup}>
            Create account for free Signup here !
          </Text>
        </View>
      </View>
      <View style={styles.bottomShape} />
    </View>
  );
};

export default Login;
