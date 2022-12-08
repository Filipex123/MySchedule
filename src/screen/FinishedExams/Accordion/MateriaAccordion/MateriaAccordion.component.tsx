import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {
  faArrowDown,
  faArrowUp,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Assunto from '../../../../model/Assunto.model';
import {APP_COLOR} from '../../../Login/constants';
import AssuntoCard from '../AssuntoCard/AssuntoCard.component';
import styles from './MateriaAccordion.style';

interface IMateriaExams {
  nome: string;
  assuntos: Assunto[];
}

const MateriaAccordionExams: React.FC<IMateriaExams> = ({nome, assuntos}) => {
  const [isMatChecked, setIsMatChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
            <FontAwesomeIcon size={18} icon={faCircleCheck} color={APP_COLOR} />
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
            <AssuntoCard key={index} nome={item.nome} />
          )}
        />
      )}
    </>
  );
};

export default MateriaAccordionExams;
