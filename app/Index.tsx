import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FontLoader from '../components/FontLoader';
import Board from '../components/Board';
import { Colors } from '../constants/theme';

export default function App() {
    return (
        <FontLoader>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />
                    <Board />
                </SafeAreaView>
            </SafeAreaProvider>
        </FontLoader>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});