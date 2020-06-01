import React from 'react';
import {View,Text} from "react-native";
import styles from '../stylesheets/Components/BalanceView'
function BalanceView(){
    return (
        <View style={{flex:1,maxHeight:148}}>
           <View style={styles.balanceContainer}>
                   <Text style={styles.balanceText}>BALANCE</Text>
                    <Text style={styles.moneyText}>-$171 559.80</Text>
                    <Text style={styles.percentText}>+4.28%</Text>
           </View>
            <View style={styles.sliderContainer}>
                <View style={[styles.sliderEllipse,styles.whiteEllipse]}/>
                <View style={[styles.sliderEllipse,styles.grayEllipse]}/>
            </View>
        </View>
    )
}

export default BalanceView;
