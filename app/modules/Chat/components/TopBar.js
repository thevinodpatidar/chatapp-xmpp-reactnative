import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const TopBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.barTitle}>Chats</Text>
            <Icon name="person-add-outline" color="#5ce27f" size={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        marginTop : 8,
        marginRight : 16,
        justifyContent : "space-between",
        alignItems : "center"
    },
    barTitle : {
        margin : 16,
        fontSize : 32
    }
})

export default TopBar;

