import React from 'react';
import {View} from 'react-native';
import Vestibular from '../../../model/Vestibular.model';
import styles from './AccordionExams.styles';

import VestibularAccordion from './VestibularAccordion/VestibularAccordion.component';

interface IAccordionExams {
  data: Vestibular[];
}

const AccordionExams: React.FC<IAccordionExams> = ({data}) => {
  return (
    <View style={styles.outerContainer}>
      {data.map((item, index) => {
        console.log(item);
        return (
          <VestibularAccordion
            key={index}
            id={item._id}
            nome={item.nome}
            materias={item.materias}
          />
        );
      })}
    </View>
  );
};

export default AccordionExams;
