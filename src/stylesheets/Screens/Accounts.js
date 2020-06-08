import {StyleSheet} from 'react-native';
import colors from '../../colors';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primaryBackgroundColor},
  image: {
    width: 24,
    height: 24,
    marginVertical: 10,
    marginHorizontal: 12,
    tintColor: colors.primaryTintColor,
  },
  imageNoHorizontalMargin: {
    width: 24,
    height: 24,
    marginVertical: 10,
    tintColor: colors.primaryTintColor,
  },
  flatlist: {marginTop: 5, flex: 1},
  itemContainer: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: colors.primaryTintColor,
    borderRadius: 8,
    minHeight: 82,
    padding: 12,
  },
  nameContainer: {marginBottom: 4},
  nameText: {fontSize: 20, color: colors.black, opacity: 0.6},
  amountText: {fontWeight: '500', fontSize: 34},
});
export default styles;
