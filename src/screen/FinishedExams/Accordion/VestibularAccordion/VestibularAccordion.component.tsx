import {faCircleCheck} from '@fortawesome/free-regular-svg-icons';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useContext, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {UserContext} from '../../../../context/UserContext';
import Materia from '../../../../model/Materia.model';
import {checkUserExam} from '../../../../utils/userAPI';
import {APP_COLOR} from '../../../Login/constants';
import MateriaAccordion from '../MateriaAccordion/MateriaAccordion.component';
import styles from './VestibularAccordion.styles';

interface IVestibularExams {
  id: string | undefined;
  nome: string;
  materias: Materia[];
}

const VestibularAccordionExams: React.FC<IVestibularExams> = ({
  id,
  nome,
  materias,
}) => {
  const [isVestChecked, setIsVestChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const {user} = useContext(UserContext);

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
            <FontAwesomeIcon size={22} icon={faCircleCheck} color={APP_COLOR} />
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
            renderItem={({item, index}) => {
              return (
                <MateriaAccordion
                  key={index}
                  nome={item.nome}
                  assuntos={item.assuntos}
                />
              );
            }}
          />
        )}
      </View>
    </>
  );
};

export default VestibularAccordionExams;
