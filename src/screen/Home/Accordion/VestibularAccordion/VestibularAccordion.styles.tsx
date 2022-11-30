import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../../Login/constants';

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
    borderBottomWidth: 2,
    borderBottomColor: APP_COLOR,
  },
  titleAndCheckContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 33,
    color: APP_COLOR,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'flex-end',
  },
});

export default styles;
