import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
// import { TextInput } from 'react-native-gesture-handler'
// import { saveUserToken } from '../../actions/token';

const LoginScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.emailContainer}>
                {/* <Text>Email</Text> */}
                <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}></TextInput>
            </View>
            <View style={styles.passwordContainer}>
                {/* <Text >Password</Text> */}
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry></TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={()=> alert("Login")} ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : "center",
        padding : 30
    },
    emailContainer : {

    },
    passwordContainer : {

    },
    buttonContainer : {

    }
})

export default LoginScreen;

