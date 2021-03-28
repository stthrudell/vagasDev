import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'

import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
    return (
        <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
            <LottieView 
                source={require('../../../assets/splash.json')} 
                autoPlay 
                loop={false}
                speed={.7}
                onAnimationFinish={() => {
                    navigation.navigate('Home')
                }}
            />
            <StatusBar style="auto" />
        </View>
    )
}
