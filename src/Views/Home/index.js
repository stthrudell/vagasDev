import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Linking, Image } from 'react-native'


import LottieView from 'lottie-react-native';

import * as S from './style'
import Footer from '../../Components/Footer';


export default function Home({navigation}) {

    const animationRef = React.useRef();

    function handleButton() {
        animationRef.current.play()
    }

    function openLinkProject() {
        Linking.openURL('https://github.com/stthrudell/vagasDev');
    }

    return (
        <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
            <LottieView 
                ref={animationRef}
                source={require('../../../assets/check.json')} 
                autoPlay={false}
                loop={false}
                speed={1.5}
                onAnimationFinish={() => {
                    navigation.navigate('Repositories')
                }}
                style={{marginTop: 250}}
            />
            <Image
                source={require('../../../assets/logo.jpg')}
            />
            <S.Title>Olá dev! &#128075;</S.Title>
            <S.Text>Este app foi desenvolvido com o intuito de te ajudar a achar uma vaga como desenvolvedor.</S.Text>
            <S.Text >Este projeto é opensource e você pode contribuir <S.Span onPress={openLinkProject}>clicando aqui</S.Span></S.Text>
            <S.Text>Good luck and let's code!</S.Text>
            <S.Button
                onPress={handleButton}
            >
                <S.TextLight>Encontrar Vagas</S.TextLight>
            </S.Button>
            <StatusBar style="auto" />
            <Footer />
        </View>
    )
}
