import {StyleSheet} from 'react-native';
import colors from '../../colors';
const styles = StyleSheet.create({
  headerContainer: {marginHorizontal: 16, marginVertical: 12},
  headerText: {
    color: colors.secondaryBackgroundColor,
    fontSize: 17,
  },
  container: {flex: 1},
  blockContainer: {marginVertical: 16},
  blockText: {
    fontSize: 14,
    color: colors.black,
    opacity: 0.3,
    marginLeft: 16,
    marginVertical: 8,
  },
  rowContainer: {backgroundColor: colors.primaryTintColor},
  subscribeButtonContainer: {
    marginHorizontal: 16,
    marginTop: 8,
    alignItems: 'center',
    backgroundColor: colors.secondaryBackgroundColor,
    minHeight: 50,
    justifyContent: 'center',
    borderRadius: 4,
  },
  subscribeButtonText: {color: colors.primaryTintColor, fontSize: 21},
  bottomButtonsContainer: {marginTop: 92},
  bottomButtonContainer: {
    marginHorizontal: 16,
    marginTop: 8,
    alignItems: 'center',
    backgroundColor: colors.primaryTintColor,
    minHeight: 50,
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(' + colors.secondaryBackgroundColorRgba + ',.1)',
  },
  bottomButtonText: {color: colors.secondaryBackgroundColor, fontSize: 21},
});
export default styles;
