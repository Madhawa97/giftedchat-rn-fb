import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';
import { NavigationContainer } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your email'
                label="Email"
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label="Password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />

            <Button title="sign in" style={styles.button} />
            <Button title="register" style={styles.button} onPress={()=> navigation.navigate('Register')}/>
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    }
})