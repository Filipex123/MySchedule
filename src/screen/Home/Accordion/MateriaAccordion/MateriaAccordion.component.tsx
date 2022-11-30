import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Assunto from '../../../../model/Assunto.model';
import {APP_COLOR} from '../../../Login/constants';
import AssuntoCard from '../AssuntoCard/AssuntoCard.component';
import styles from './MateriaAccordion.style';

interface IMateria {
  nome: string;
  isChecked: boolean;
  assuntos: Assunto[];
}

const MateriaAccordion: React.FC<IMateria> = ({nome, isChecked, assuntos}) => {
  const [isMatChecked, setIsMatChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsMatChecked(isChecked);
  }, []);

  return (
    <>
      <TouchableOpacity
        style={styles.outerContainer}
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}>
        <View style={styles.titleAndCheckContainer}>
          <Text style={styles.title}># {nome}</Text>
          <TouchableOpacity
            onPress={() => {
              setIsMatChecked(!isMatChecked);
            }}>
            <FontAwesomeIcon
              size={18}
              icon={isMatChecked ? faSquareCheck : faSquare}
              color={APP_COLOR}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={isExpanded ? faArrowUp : faArrowDown} />
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <FlatList
          data={assuntos}
          keyExtractor={item => item.nome}
          renderItem={({item, index}) => (
            <AssuntoCard
              key={index}
              isChecked={item.isChecked}
              nome={item.nome}
            />
          )}
        />
      )}
    </>
  );
};

export default MateriaAccordion;
