import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from '../stylesheets/Screens/Settings';
import SettingRow from '../Components/SettingRow';
function Settings({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Save</Text>
        </View>
      ),
      headerLeft: () => (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Cancel</Text>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.blockContainer}>
        <Text style={styles.blockText}>Main</Text>

        <View style={styles.rowContainer}>
          <SettingRow name="Currency" value="USD" />
          <SettingRow name="Appearance" value="USD" />
          <SettingRow name="Additionally" value="USD" />
        </View>
      </View>
      <View style={styles.blockContainer}>
        <Text style={styles.blockText}>Premium</Text>

        <View style={styles.rowContainer}>
          <SettingRow name="Currency" disabled />
          <SettingRow name="Appearance" disabled />
          <SettingRow name="Additionally" disabled />
        </View>
      </View>

      <View style={styles.subscribeButtonContainer}>
        <Text style={styles.subscribeButtonText}>Subscribe</Text>
      </View>

      <View style={styles.bottomButtonsContainer} />
      <View style={styles.bottomButtonContainer}>
        <Text style={styles.bottomButtonText}>Send Your Review</Text>
      </View>
      <View style={styles.bottomButtonContainer}>
        <Text style={styles.bottomButtonText}>Rate In App Store</Text>
      </View>
    </View>
  );
}

export default Settings;
