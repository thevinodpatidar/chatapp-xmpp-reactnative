import React from 'react'
import { StyleSheet, Text, View, Button ,TextInput } from 'react-native'
// import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const SignupScreen = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigation = useNavigation();

    function register(){
        const data = {
            email,
            password
        }

        props.signup(data);
        navigation.navigate("Login")
    }
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
                <Button title="Signup" onPress={()=> {register()}}></Button>
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

export default SignupScreen;

