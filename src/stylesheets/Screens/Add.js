import {StyleSheet} from 'react-native';
import colors from '../../colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: colors.primaryTintColor,
    borderTopColor: 'rgba(' + colors.blackRgba + ', .1)',
    borderTopWidth: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingLeft: 16,
    alignItems: 'center',
  },
  textInput: {
    height: 48,
    width: '84%',
    fontSize: 48,
  },
  settingsTitle: {
    fontSize: 14,
    color: colors.black,
    opacity: 0.3,
    marginLeft: 16,
    marginVertical: 8,
  },
  noteTextContainer: {paddingLeft: 16, marginVertical: 12},
  noteText: {color: colors.black, opacity: 0.7, fontSize: 18},
});
export default styles;
