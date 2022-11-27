import React, {useContext} from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Home.styles';
import addItem from '../../../assets/addItem.png';
import completedItems from '../../../assets/completedItems.png';
import cash from '../../../assets/cash.png';
import profile from '../../../assets/profile.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {UserContext} from '../../context/UserContext';
import Accordion from './Accordion/Accordion.component';

const Home: React.FC = () => {
  const {user} = useContext(UserContext);

  console.log(user);
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
        <Accordion data={user?.vestibulares} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomBarContainer}>
          <View style={styles.leftBottomContainer}>
            <TouchableOpacity
              onPress={() => {}}
              style={{paddingHorizontal: 12}}>
              <Image source={addItem} />
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

export default Home;
