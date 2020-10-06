import React from 'react';
import { View,StyleSheet, Text } from "react-native"
import ChatList from './components/ChatList';
import TopBar from './components/TopBar';

function ChatScreen({navigation}) {
      return (
            <View style={styles.container}>
                <TopBar />
                <ChatList navigation={navigation} />
            </View>
      );
  }
  
const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor : '#ffffff'
  },
})
export default ChatScreen;