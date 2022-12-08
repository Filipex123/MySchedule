import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../Login/constants';

const styles = StyleSheet.create({
  assContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 12,
  },
  titleAndCheckContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    color: APP_COLOR,
    paddingRight: 8,
  },
});

export default styles;
