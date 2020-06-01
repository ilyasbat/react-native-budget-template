import React from "react";
import { StyleSheet} from "react-native";
import colors from "../../colors";
const styles = StyleSheet.create({
    balanceContainer:{flex:1,justifyContent:'center',alignItems:'center',minHeight:148},
    balanceText:{color:'rgba(255,255,255,.5)',fontSize:15},
    moneyText:{color:colors.primaryTintColor,fontSize:48},
    percentText:{color:'rgba(255,255,255,.8)',fontSize:20},
    sliderContainer:{flex:1,flexDirection:'row',justifyContent:'center'},
    sliderEllipse:{width:7,height:7,marginRight:8,borderRadius:7},
    whiteEllipse:{backgroundColor:colors.primaryTintColor},
    grayEllipse:{backgroundColor:'rgba(255,255,255,.3)'},
})
export default styles;
