import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native';

import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
    const [splashRunned, setSplashRunned] = React.useState(false);

    const isFocused = useIsFocused();

    React.useEffect(() => {
        if(splashRunned && isFocused)
            navigation.navigate('Home')
    }, [isFocused])

    return (
        <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
            <LottieView 
                source={require('../../../assets/splash.json')} 
                autoPlay 
                loop={false}
                speed={.7}
                onAnimationFinish={() => {
                    setSplashRunned(true)
                    navigation.navigate('Home')
                }}
            />
            <StatusBar style="auto" />
        </View>
    )
}
