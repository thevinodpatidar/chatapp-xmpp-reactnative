import React from 'react';
import { View,StyleSheet, Image, Text } from "react-native"


function ProfileScreen({ navigation,route }) {
      return (
            <View style={styles.container}>
                <Text> Profile </Text>
            </View>
      );
  }
  
const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : '#ffffff',
  }
})
export default ProfileScreen;