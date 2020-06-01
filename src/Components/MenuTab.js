import React from 'react';
import {Text, View} from "react-native";
import styles from '../stylesheets/Components/MenuTab'

function MenuTab() {
    return (
        <View style={styles.menuTabContainer}>
            <View style={styles.menuTextsContainer}>
                <View>
                    <Text style={styles.menuText}>DAILY</Text>
                </View>
                <View>
                    <Text style={styles.menuText}>WEEKLY</Text>
                </View>
                <View style={styles.menuActiveTextContainer}>
                    <Text style={styles.menuActiveText}>MONTHLY</Text>
                </View>
                <View>
                    <Text style={styles.menuText}>YEARLY</Text>
                </View>
            </View>
        </View>
    )
}

export default MenuTab
