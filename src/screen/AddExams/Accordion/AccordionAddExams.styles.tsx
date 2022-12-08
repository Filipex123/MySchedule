import {StyleSheet} from 'react-native';
import {APP_COLOR} from '../../Login/constants';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 2,
    // borderColor: 'black',
    width: '100%',
  },
  vestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
    borderBottomWidth: 2,
    borderBottomColor: APP_COLOR,
  },
  vestTitle: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 33,
    color: APP_COLOR,
  },
  matContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  matTitle: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    color: APP_COLOR,
    paddingRight: 8,
  },
  assContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'flex-end',
  },
  titleAndCheckContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
});

export default styles;
