import {StyleSheet} from 'react-native';
import colors from '../../colors';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 44,
    alignItems: 'center',
    marginStart: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(' + colors.blackRgba + ', .1)',
  },
  nameText: {
    fontSize: 18,
    color: colors.black,
    opacity: 0.7,
  },
  valueContainer: {flexDirection: 'row'},
  valueText: {
    color: colors.secondaryBackgroundColor,
    fontSize: 20,
    marginRight: 12,
  },
  arrowImage: {width: 24, height: 24, marginRight: 5},
  proContainer: {
    backgroundColor: colors.secondaryBackgroundColor,
    marginEnd: 16,
    padding: 4,
    borderRadius: 4,
  },
  proText: {color: colors.primaryTintColor, fontSize: 15},
});
export default styles;
