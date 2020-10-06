import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import ChatCard from './ChatCard'

const ChatList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight
            activeOpacity={0}
            underlayColor="#ffffff"
            onPress={() => navigation.push("Chat")}>
                <ChatCard />
            </TouchableHighlight>
            {/* <ChatCard /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})

export default ChatList

