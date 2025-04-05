import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../context/AuthContext";


const HomeScreen = () => {
    const { user } = useAuth()
    return (
        <LinearGradient colors={colors.gradienteSecundario} style={styles.container}>
            <Text style= {styles.text}>Bienvenido {user?.displayName || 'usuario'}</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
    text: {
        fontSize: 20,
        color: colors.luminous,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textShadowColor: '#B22222',
        textShadowOffset: { width: 4, height: 4 }, 
        textShadowRadius: 8,                    
        opacity: 1,
    },
});

export default HomeScreen