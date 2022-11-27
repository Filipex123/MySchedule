import {Platform, StyleSheet} from 'react-native';
import {APP_COLOR} from './constants';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: 'center',
    width: '100%',
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 32,
    justifyContent: 'center',
  },
  orContainer: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'center',
  },
  signupContainer: {
    alignSelf: 'center',
    marginTop: 32,
  },
  line: {
    width: '85%',
    alignSelf: 'center',
    height: 1,
    marginBottom: 24,
    backgroundColor: APP_COLOR,
  },
  smallLine: {
    width: '30%',
    alignSelf: 'center',
    height: 1,
    marginHorizontal: 12,
    backgroundColor: APP_COLOR,
  },
  text: {
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 68,
    color: APP_COLOR,
  },
  signup: {
    color: APP_COLOR,
    lineHeight: 68,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F4F4F4',
  },
  headerShape: {
    height: 150,
    width: '100%',
    backgroundColor: APP_COLOR,
    justifyContent: 'flex-end',
  },
  bottomShape: {
    height: 80,
    width: '100%',
    backgroundColor: APP_COLOR,
  },
  circlesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleShape: {
    height: 28,
    width: 28,
    paddingHorizontal: 24,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    margin: 24,
  },
  modalOuterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 268,
    width: 250,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    opacity: 0.95,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    paddingBottom: 56,
    paddingTop: 20,
  },
  modalButton: {
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: APP_COLOR,
  },
  modalButtonText: {
    fontSize: 20,
    lineHeight: 40,
    color: APP_COLOR,
    textDecorationColor: 'underline',
  },
  buttonModalContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
});

export default styles;
