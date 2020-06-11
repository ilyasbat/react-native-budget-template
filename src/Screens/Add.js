import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Switch, StatusBar} from 'react-native';
import SettingsIncomeHeaderRight from '../Components/Headers/SettingsIncomeHeaderRight';
import SettingsIncomeHeaderLeft from '../Components/Headers/SettingsIncomeHeaderLeft';
import colors from '../colors';
import styles from '../stylesheets/Screens/Add';
import SettingRow from '../Components/SettingRow';
function Add({navigation, route}) {
  useEffect(() => {
    if (route.params.color) {
      setColor(route.params.color);
    }
    navigation.setOptions({
      headerRight: () => <SettingsIncomeHeaderRight title="Done" />,
      headerLeft: () => <SettingsIncomeHeaderLeft action={navigation.goBack} />,
      title: route.params.title,
    });
  }, [navigation, route.params.color, route.params.title]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [color, setColor] = useState(colors.secondaryBackgroundColor);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [textValue, setTextValue] = useState('0');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.inputContainer}>
        <Switch
          trackColor={{false: '#545455', true: color}}
          thumbColor={'#FFF'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <TextInput
          style={[styles.textInput, {color: color}]}
          keyboardType="phone-pad"
          textAlign={'right'}
          onChangeText={text => setTextValue(text)}
          value={'$' + textValue}
        />
      </View>
      <View style={{marginVertical: 16}}>
        <Text style={styles.settingsTitle}>Premium</Text>

        <View>
          <SettingRow name="Category" value="Salary" />
          <SettingRow name="Date" value="Today" />
          <SettingRow name="Account" value="Cash" />
          <SettingRow name="Transfer from Account" value="Optional" />

          <View style={styles.noteTextContainer}>
            <Text style={styles.noteText}>Notes</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Add;
