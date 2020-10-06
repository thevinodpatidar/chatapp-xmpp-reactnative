import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import ChatTopBar from './ChatTopBar'
import Icon from 'react-native-vector-icons/Ionicons'

const Chat = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ChatTopBar navigation={navigation}/>
            <View style={styles.chatInputContainer}>
                {/* <Icon name="camera-outline" color="#5ce37f" size={32} /> */}
                <TextInput style={styles.textInput} placeholder="Type a message" />
                <Icon style={{marginRight : 16}} name="send-sharp" color="#5ce37f" size={28} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffffff',
        justifyContent : "space-between"
    },
    chatInputContainer : {
        flexDirection : "row",
        // width : "100%",
        // margin : 8,
        alignItems : "center",
        justifyContent : "space-between",
        // borderRadius : 50,
        borderTopWidth : .5,
        borderColor : "#5ce27f"
    },
    textInput : {
        width : '90%',
        paddingLeft : 16,
        lineHeight : 16,
        fontSize : 16
    }
})

export default Chat

