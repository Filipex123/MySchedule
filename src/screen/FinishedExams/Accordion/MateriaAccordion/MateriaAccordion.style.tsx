import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../Login/constants';

const styles = StyleSheet.create({
  titleAndCheckContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
  title: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    color: APP_COLOR,
    paddingRight: 8,
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'flex-end',
  },
});

export default styles;
