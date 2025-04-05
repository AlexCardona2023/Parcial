import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../../constants/colors";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../../assets/perfil-del-usuario.png'

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [errorMessages, setErrorMessenges] = useState('')

    const handleRegister = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            updateProfile(user, {
                displayName: name
            }).then(() =>{
                console.log('Usuario registrado: ', user.displayName);
                navigation.navigate('Login', {screen: 'LoginScreen'})
            }).catch((error) => {
                setError(true);
                setErrorMessenges(error.message);
            })
            .catch((error) => {
                setError(true);
                setErrorMessenges(error.message)
            })
        })
    }
    
    return(
        <LinearGradient colors={colors.gradienteTerciario} style={styles.container}>
                    <Image source={Logo} style={styles.logo} />
                    <Text style={styles.title}>Crear Cuenta</Text>

                    <View style={styles.inputContainer}>
                        <Icon name="account-outline" size={24} style={styles.icon}/>
                        <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}/>
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name="email-outline" size={24} style={styles.icon}/>
                        <TextInput
                        style={styles.input}
                        placeholder="Coreo Electronico"
                        value={email}
                        onChangeText={setEmail}/>
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon name="lock-outline" size={24} style={styles.icon}/>
                        <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}/>
                    </View>

                    {error && (
                        <Text style={styles.errorMessage}>
                            {errorMessages}
                        </Text>
                    )}

                    <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                        <Text style={styles.registerButtonText}>Crear Cuenta</Text>
                    </TouchableOpacity>

                    <View style={styles.registerContainer}>
                        <Text style={styles.registerText}>¿Ya tienes una cuenta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.registerLink}>Inciar Sesion</Text>
                        </TouchableOpacity>
                    </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.variante2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    title: {
        fontSize: 18,
        color: colors.luminous,
        fontWeight: '500',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.fondoClaro,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: colors.variante3,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        color: colors.delicate,
    },
    forgotPassword: {
        color: colors.variante1,
        fontSize: 14,
        marginBottom: 20,
    },
    registerButton: {
        backgroundColor: colors.exito,
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginBottom: 30,
    },
    registerButtonText: {
        color: colors.luminous,
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
    },
    registerText: {
        color: colors.subtitle,
        fontSize: 14,
    },
    registerLink: {
        color: colors.variante1,
        fontSize: 14,
        fontWeight: 'bold',
    },
    errorMessage: {
        color: colors.error,
        fontSize: 14,
        marginBottom: 10,
    },
})
export default RegisterScreen