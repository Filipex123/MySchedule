import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {getUser} from '../../utils/userAPI';
import {APP_COLOR} from './constants';
import styles from './Login.styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [senha, setSenha] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loginError, setLoginError] = useState<boolean>(false);

  const handleLoginPress = async () => {
    const isLoged = await getUser(email, senha);
    console.log(isLoged);
    console.log(`Email: ${email} , Senha: ${senha}`);
    if (isLoged) {
      navigation.navigate('Home');
    } else {
      setLoginError(true);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.headerShape}>
        <View style={styles.circlesContainer}>
          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
          <View style={styles.circleShape} />
        </View>
      </View>

      <View style={styles.outerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>MySchedule</Text>
        </View>
        <View style={styles.line} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={newText => {
            setEmail(newText);
          }}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={newText => {
            setSenha(newText);
          }}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
        />

        <View style={styles.buttonContainer}>
          <Button
            onPress={handleLoginPress}
            title="Sign In"
            color={APP_COLOR}
            accessibilityLabel="This is the button to login in app"
          />
          {loginError && <Text>Deu erro</Text>}
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
