import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChoosePhotoButton from './assets/components/ChoosePhotoButton';

export default function App() {
    return (
        <View style={styles.container}>
        <Text style={styles.mainText}>have too much fun</Text>
        <StatusBar style="auto" />
        <ChoosePhotoButton />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 40
        }
});
