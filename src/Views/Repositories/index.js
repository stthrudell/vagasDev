import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'


export default function Repositories() {

    return (
        <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
            <Text>Repositorios</Text>
            <StatusBar style="auto" />
        </View>
    )
}
