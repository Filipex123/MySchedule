import {StyleSheet} from 'react-native';
import {APP_COLOR, APP_COLOR_OPACITY} from '../Login/constants';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  headerContainer: {
    flex: 0.6,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderRadius: 8,
    backgroundColor: APP_COLOR,
  },
  textHeader: {
    color: 'white',
    fontSize: 24,
    lineHeight: 34,
    fontWeight: '400',
  },
  dynamicCounterHeader: {
    width: '100%',
    paddingHorizontal: 52,
  },
  bodyContainer: {
    flex: 5,
    width: '90%',
    backgroundColor: APP_COLOR_OPACITY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingBottom: 12,
  },
  bottomContainer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomBarContainer: {
    flexDirection: 'row',
    backgroundColor: APP_COLOR,
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  leftBottomContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBottomContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});

export default styles;
