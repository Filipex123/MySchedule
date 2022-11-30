import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {APP_COLOR} from './constants';
import styles from './Login.styles';
import Modal from 'react-native-modal';
import errorIcon from '../../../assets/errorIconModal.png';
import {UserContext} from '../../context/UserContext';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [senha, setSenha] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loginError, setLoginError] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const {userLogin, user} = useContext(UserContext);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  useEffect(() => {}, [loginError]);

  const handleLoginPress = async () => {
    userLogin(email, senha)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch(() => {
        handleModal();
        setLoginError(true);
      });
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
          {loginError && (
            <Modal
              isVisible={isModalVisible}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.modalOuterContainer}>
                <View style={styles.modalContainer}>
                  <Image source={errorIcon} />
                  <Text style={styles.modalTitle}>
                    Falha ao fazer login email ou senha incorreto
                  </Text>

                  <View style={styles.buttonModalContainer}>
                    <TouchableOpacity
                      onPress={handleModal}
                      style={styles.modalButton}>
                      <View>
                        <Text style={styles.modalButtonText}>
                          Tente novamente
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          )}
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
