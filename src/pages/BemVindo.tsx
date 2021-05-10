import React from 'react'
import { Text, TouchableOpacity, StyleSheet, SafeAreaView, View } from 'react-native'
import LottieView from 'lottie-react-native'
import ToDoImg from '../assets/ToDo.json'
import Colors from '../style/Colors'

export function BemVindo() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Bem Vindo{'\n'}Ao To-Do_EG</Text>

            <View style={styles.TodoImg}>
                <LottieView source={ToDoImg} autoPlay loop />
            </View>

            <Text style={styles.subTitle}>O To-Do-EG ajuda você a gerencia suas tarefas e deixa você mais organizado na hora de busca suas tarefas diarias ou agenda tarefas.</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    Proxímo
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        marginTop: 100,
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 45,
        fontWeight: 'bold',
        color: '#555'
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 10,
        color: '#888'
    },
    button: {
        backgroundColor: Colors.redLight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 25,
        paddingHorizontal: 30,
        height: 58,
        width: 247,
    },
    textButton: {
        color: '#FFF',
        fontSize: 18,
    },
    TodoImg: {
        width: 300,
        height: 300
    }
})