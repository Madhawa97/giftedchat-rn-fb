import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;

                user.updateProfile({
                    displayName: name,
                    photoURL: imageURL ? imageURL : "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
                }).then(() => {
                    // Update successful
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                navigation.replace('Chat');

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your name'
                label="Name"
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)}
            />
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
            <Input
                placeholder='Enter your image url'
                label="Profile Picture"
                leftIcon={{ type: 'material', name: 'face' }}
                value={imageURL}
                onChangeText={text => setImageURL(text)}
            />

            <Button title="register" style={styles.button} onPress={register} />
        </View>
    )
}

export default RegisterScreen;


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