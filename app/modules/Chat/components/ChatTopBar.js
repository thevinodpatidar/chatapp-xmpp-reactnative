import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ChatTopBar = ({navigation}) => {
    const [dim] = useState(Dimensions.get("screen"));

    return (
        <View style={[styles.container]} >
            <TouchableHighlight style={{borderRadius : 50}}
             activeOpacity={.5}
             underlayColor="#e1e1e1"
             onPress={() => navigation.goBack()}>
                <View style={styles.backContainer}>
                    <Icon style={{padding : 4}} name="arrow-back-outline" color="#5ce27f" size={24} />
                    <View style={styles.imageContainer}>
                        <Image source={{uri : "https://picsum.photos/771/205"}} style={styles.img} />
                    </View>
                </View>
            </TouchableHighlight>
            <View style={styles.leftContainer} >
                <View style={{flex :1}}>
                    <View style={styles.topContainer}>
                        <Text style={styles.username}>Vinod Patidar</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.status}>Online</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightContainer} >
                <Icon style={{padding : 8}} name="call-outline" color="#5ce27f" size={24} />
                <Icon style={{padding : 8}} name="videocam-outline" color="#5ce27f" size={24} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        marginTop : 8,
        marginRight : 32,
        paddingBottom : 8,
        justifyContent : "space-between",
        alignItems : "center",
        height : 60,
        borderBottomWidth : .2,
        borderBottomColor : "#000000",
        width : '100%'
    },
    backContainer : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 30,
        margin : 8
    },
    leftContainer : {
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center",
        width : '50%'
    },
    imageContainer : {
        padding : 8
    },
    img : {
        width : 40,
        height : 40,
        borderRadius : 50
    },
    topContainer : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    username : {
        fontSize : 18,
        fontWeight : "500"
    },
    bottomContainer : {
        // marginTop : 8,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    status : {

    },
    rightContainer : {
        flexDirection : "row",
        // paddingRight : 24
    }
})

export default ChatTopBar;

