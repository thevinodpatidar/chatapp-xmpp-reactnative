import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const ChatCard = () => {
    const [dim] = useState(Dimensions.get("screen"));
    return (
        <View style={[styles.container,{ width : dim.width}]} >
            <View style={styles.imageContainer}>
                <Image source={{uri : "https://picsum.photos/771/203"}} style={styles.img} />
            </View>
            <View style={{flex :1}}>
                <View style={styles.topContainer}>
                    <Text style={styles.username}>Vinod Patidar</Text>
                    <Text style={styles.time}> 9:30</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.lastMessage}>How are you?</Text>
                    <Text style={styles.messageCountBadge}></Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        alignItems : "center",
        height : 80
    },
    imageContainer : {
        padding : 16
    },
    img : {
        width : 60,
        height : 60,
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
    time : {
        marginRight : 16,
        fontSize : 12,
        fontWeight : "500",
        color : "#313131",
        opacity : .7
    },
    bottomContainer : {
        marginTop : 8,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    lastMessage : {
        color : '#313131',
        opacity : .7,
        fontSize : 14
    },
    messageCountBadge :{

    }
})

export default ChatCard

