import React from 'react';
import {Image, View} from "react-native";
import styles from "../stylesheets/Screens/Accounts";

function HeaderRight(){
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
                source={require('../icons/search.png')}
                style={styles.imageNoHorizontalMargin}
            />
            <Image
                source={require('../icons/plus.png')}
                style={styles.image}
            />
        </View>
    )
}
export default HeaderRight
