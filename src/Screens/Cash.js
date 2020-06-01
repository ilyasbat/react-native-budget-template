import React,{useEffect} from 'react';
import {  View, Text,FlatList,Image} from "react-native";
import styles from "../stylesheets/Screens/Cash";
import colors from "../colors";
import MenuTab from "../Components/MenuTab";
import BalanceView from "../Components/BalanceView";
import HeaderRight from "../Components/HeaderRight";
function Accounts({navigation}) {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderRight/>
            ),
        });
    }, []);
    const data = [
        {
            name:'Rental revenue',
            amount:'$1500',
            sign:'+',
            image:'https://ilyasbat.com.tr/react-native-ders/icons/house.png',
            key:'1'
        },
        {
            name:'Car',
            amount:'$193.02',
            sign:'-',
            image:'https://ilyasbat.com.tr/react-native-ders/icons/car.png',
            key:'2'
        },
        {
            name:'Salary',
            amount:'$7500',
            sign:'+',
            image:'https://ilyasbat.com.tr/react-native-ders/icons/money.png',
            key:'3'
        },
        {
            name:'Food & Restaurants',
            amount:'$37',
            sign:'-',
            image:'https://ilyasbat.com.tr/react-native-ders/icons/restaurant.png',
            key:'4'
        },
        {
            name:'Coffee',
            amount:'$2',
            sign:'-',
            image:'https://ilyasbat.com.tr/react-native-ders/icons/coffee.png',
            key:'5'
        },
        {
            name:'Food & Restaurants',
            amount:'$5',
            sign:'-',
            image:'https://ilyasbat.com.tr/react-native-ders/icons/restaurant.png',
            key:'6'
        },
        {
            name:'Mobile Account',
            amount:'$19.99',
            sign:'-',
            image:'https://ilyasbat.com.tr/react-native-ders/icons/phone.png',
            key:'7'
        },
        {
            name:'Entertainment',
            amount:'$138',
            sign:'-',
            image:'https://ilyasbat.com.tr/react-native-ders/icons/entertaintment.png',
            key:'8'
        },
    ];
    return (
        <View style={styles.container}>
            <MenuTab/>
            <BalanceView/>
            <View style={{flex:0,justifyContent:'center',alignItems:'center',marginTop:32,marginBottom:8}}>
                <View style={{minWidth:101,backgroundColor:'rgba(255,255,255,.2)',alignItems:'center',borderRadius:8,paddingVertical:10,paddingHorizontal:16}}>
                <Text style={{color:colors.primaryTintColor,opacity:.8,fontSize:21}}>Add New</Text>
                </View>
            </View>
            <FlatList
                style={styles.flatlist}
                data={data}
                renderItem={({ item }) => (
                   <View style={{flex:1,flexDirection:'row',height:60,justifyContent:'center', alignItems:'center',paddingLeft:21,borderBottomWidth:1,borderBottomColor:'rgba('+colors.blackRgba+',.1)'}}>
                       <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                           <View style={{backgroundColor:'rgba('+colors.secondaryBackgroundColorRgba+', .2)',width:34,height:34,borderRadius:34,alignItems:'center',justifyContent:'center',marginRight:13}}>
                            <Image style={{width:24, height:24}} source={{uri:item.image}}/>
                           </View>
                            <Text style={{fontSize:20,color:colors.black,opacity:.8}}>{item.name}</Text>
                       </View>
                       <View style={{marginRight:16}}>
                        <Text style={{fontSize:27,color:item.sign==='-'?colors.primaryBackgroundColor:colors.secondaryBackgroundColor}}>{item.sign==='-'?'-':null}{item.amount}</Text>
                       </View>
                   </View>
                )}
                keyExtractor={item => item.key}
            />

        </View>
    )
}
export default  Accounts;
