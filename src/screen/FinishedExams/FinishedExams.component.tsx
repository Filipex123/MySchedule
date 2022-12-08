import React, {useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './FinishedExams.style';
import home from '../../../assets/home.png';
import completedItems from '../../../assets/completedItems.png';
import cash from '../../../assets/cash.png';
import profile from '../../../assets/profile.png';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../context/UserContext';
import AccordionExams from './Accordion/AccordionExams.component';

const FinishedExams: React.FC = () => {
  const navigation = useNavigation();
  const {exams, examsLogin} = useContext(UserContext);

  useEffect(() => {
    examsLogin();
  }, []);

  return (
    <View style={styles.outerContainer}>
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.countContainer}>
          <View style={{paddingLeft: 16}}>
            <Text style={styles.textHeader}> Dias de estudo: </Text>
          </View>
          <View style={styles.dynamicCounterHeader}>
            <Text style={styles.textHeader}> 12 </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.bodyContainer}>
        <AccordionExams data={exams} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomBarContainer}>
          <View style={styles.leftBottomContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={{paddingHorizontal: 12}}>
              <Image source={home} />
            </TouchableOpacity>
          </View>
          <View style={styles.rightBottomContainer}>
            <TouchableOpacity
              onPress={() => {}}
              style={{paddingHorizontal: 12}}>
              <Image source={completedItems} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{paddingHorizontal: 12}}>
              <Image source={cash} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={{paddingHorizontal: 12}}>
              <Image source={profile} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FinishedExams;
