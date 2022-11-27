import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Vestibular from '../../../model/Vestibular.model';
import styles from './Accordion.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faSquare, faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import Materia from '../../../model/Materia.model';

interface IAccordion {
  data: Vestibular[];
}

const Accordion: React.FC<IAccordion> = ({data}) => {
  const [isVestExpanded, setVestIsExpanded] = useState(false);
  const [isMatExpanded, setMatIsExpanded] = useState(false);

  // useEffect(() => {

  // }, );

  return (
    <View style={styles.outerContainer}>
      {data.map(vest => {
        return (
          <>
            <TouchableOpacity
              style={styles.vestContainer}
              onPress={() => {
                setVestIsExpanded(!isVestExpanded);
              }}>
              <View style={styles.titleAndCheckContainer}>
                <Text style={styles.vestTitle}>{vest.nome}</Text>
                <FontAwesomeIcon
                  size={22}
                  icon={vest.isChecked ? faSquareCheck : faSquare}
                />
              </View>

              <View style={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={isVestExpanded ? faArrowUp : faArrowDown}
                />
              </View>
            </TouchableOpacity>
            <View>
              {isVestExpanded && (
                <>
                  {vest.materias.map(mat => {
                    return (
                      <>
                        <TouchableOpacity
                          style={styles.matContainer}
                          onPress={() => {
                            setMatIsExpanded(!isMatExpanded);
                          }}>
                          <View style={styles.titleAndCheckContainer}>
                            <Text style={styles.matTitle}># {mat.nome}</Text>
                            <FontAwesomeIcon
                              size={18}
                              icon={vest.isChecked ? faSquareCheck : faSquare}
                            />
                          </View>

                          <View style={styles.iconContainer}>
                            <FontAwesomeIcon
                              icon={isVestExpanded ? faArrowUp : faArrowDown}
                            />
                          </View>
                        </TouchableOpacity>
                        <View>
                          {isMatExpanded && (
                            <>
                              {mat.assuntos.map(ass => {
                                return (
                                  <>
                                    <TouchableOpacity
                                      style={styles.assContainer}>
                                      <View
                                        style={styles.titleAndCheckContainer}>
                                        <Text style={styles.matTitle}>
                                          - {ass.nome}
                                        </Text>
                                        <FontAwesomeIcon
                                          size={18}
                                          icon={
                                            ass.isChecked
                                              ? faSquareCheck
                                              : faSquare
                                          }
                                        />
                                      </View>
                                    </TouchableOpacity>
                                  </>
                                );
                              })}
                            </>
                          )}
                        </View>
                      </>
                    );
                  })}
                </>
              )}
            </View>
          </>
        );
      })}
    </View>
  );
};

export default Accordion;
