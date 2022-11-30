import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {UserContext} from '../../../../context/UserContext';
import Materia from '../../../../model/Materia.model';
import {checkUserExam} from '../../../../utils/userAPI';
import {APP_COLOR} from '../../../Login/constants';
import MateriaAccordion from '../MateriaAccordion/MateriaAccordion.component';
import styles from './VestibularAccordion.styles';

interface IVestibular {
  id: string | undefined;
  nome: string;
  isChecked: boolean;
  materias: Materia[];
}

const VestibularAccordion: React.FC<IVestibular> = ({
  id,
  nome,
  isChecked,
  materias,
}) => {
  const [isVestChecked, setIsVestChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const {user} = useContext(UserContext);

  useEffect(() => {
    setIsVestChecked(isChecked);
  }, []);

  const handleCheckPress = async (
    userId: string | undefined,
    examId: string | undefined,
    newValue: boolean,
  ) => {
    checkUserExam(userId, examId, newValue);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.outerContainer}
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}>
        <View style={styles.titleAndCheckContainer}>
          <Text style={styles.title}>{nome}</Text>
          <TouchableOpacity
            onPress={() => {
              handleCheckPress(user?._id, id, !isVestChecked);
              setIsVestChecked(!isVestChecked);
            }}>
            <FontAwesomeIcon
              size={22}
              icon={isVestChecked ? faSquareCheck : faSquare}
              color={APP_COLOR}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={isExpanded ? faArrowUp : faArrowDown} />
        </View>
      </TouchableOpacity>
      <View>
        {isExpanded && (
          <FlatList
            data={materias}
            keyExtractor={item => item.nome}
            renderItem={({item, index}) => (
              <MateriaAccordion
                key={index}
                isChecked={item.isChecked}
                nome={item.nome}
                assuntos={item.assuntos}
              />
            )}
          />
        )}
      </View>
    </>
  );
};

export default VestibularAccordion;
