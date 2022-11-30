import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {APP_COLOR} from '../../../Login/constants';
import styles from './AssuntoCard.style';

interface IAssunto {
  isChecked: boolean;
  nome: string;
}
const AssuntoCard: React.FC<IAssunto> = ({nome, isChecked}) => {
  const [isAssChecked, setIsAssChecked] = useState(false);

  useEffect(() => {
    setIsAssChecked(isChecked);
  }, []);

  useEffect(() => {
    console.log(isAssChecked);
    // atualizar no banco
  }, [isAssChecked]);

  return (
    <TouchableOpacity
      style={styles.assContainer}
      onPress={() => {
        setIsAssChecked(!isAssChecked);
      }}>
      <View style={styles.titleAndCheckContainer}>
        <Text style={styles.title}>- {nome}</Text>
        <FontAwesomeIcon
          size={18}
          icon={isAssChecked ? faSquareCheck : faSquare}
          color={APP_COLOR}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AssuntoCard;
