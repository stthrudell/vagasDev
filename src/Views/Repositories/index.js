import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

const repositories = [
    {
        id: 'backend-br',
        img: 'https://avatars1.githubusercontent.com/u/30732658?v=4',
        name: 'Backend BR',
        description: 'Espaço para divulgação de vagas para backenders'
    },
    {
        id: 'frontendbr',
        img: 'https://avatars1.githubusercontent.com/u/16963863?v=4',
        name: 'Frontend BR',
        description: 'Espaço para divulgação de vagas para front-enders.'
    },
    {
        id: 'vuejs-br',
        img: 'https://avatars2.githubusercontent.com/u/13300590?v=4.githubusercontent.com/u/16963863?v=4',
        name: 'VueJS BR',
        description: 'Espaço para divulgação de vagas relacionadas com Vue.js'
    },
    {
        id: 'androiddevbr',
        img: 'https://avatars1.githubusercontent.com/u/13825651?v=4',
        name: 'Android dev BR',
        description: 'Mural de vagas para desenvolvedor Android.'
    },
    {
        id: 'react-brasil',
        img: 'https://avatars2.githubusercontent.com/u/16929016?s=500&v=4',
        name: 'React Brasil',
        description: 'Espaço para divulgação de vagas relacionadas com Vue.js'
    },
    {
        id: 'qa-brasil',
        img: 'https://avatars0.githubusercontent.com/u/59667653?s=200&v=4',
        name: '@qa-brasil',
        description: 'Espaço para divulgação de vagas para Analistas de testes'
    },
    {
        id: 'phpdevbr',
        img: 'https://avatars0.githubusercontent.com/u/21205969?v=3&u=811926aba01e8a43d7a8ffda50b7b66a57ccdd0a',
        name: 'PHP dev BR',
        description: 'Espaço para divulgação de vagas para desenvolvedores PHP.'
    },
    {
        id: 'flutterbr',
        img: 'https://github.com/Flutter-Brazil/brand/raw/master/src/jpg/banner.jpeg',
        name: 'Flutter BR',
        description: 'Espaço para divulgação de vagas relacionadas com Flutter e Dart'
    },
    {
        id: 'uxbrasil',
        img: 'https://user-images.githubusercontent.com/3299130/48214486-2fed0800-e367-11e8-8274-6858c79ab7b4.png',
        name: 'UX Brasil',
        description: 'Espaço para divulgação de vagas para designers UI e pesquisadores UX.'
    }

]


export default function Repositories({navigation}) {

    function handleClick(repoId) {
        navigation.navigate('Vacancies', {
            repoId,
        });
    }

    return (
        <S.Container>
            <ScrollView contentContainerStyle = {{alignItems: 'center', padding: 30}} >
                {repositories.map(repository => (
                    <S.Repo key={repository.id} onPress={() => handleClick(repository.id)}>
                        <S.Image 
                            source={{
                                uri: repository.img,
                            }}
                        />
                        <S.Content>
                            <Text>{repository.name}</Text>
                            <S.Description>{repository.description}</S.Description>
                        </S.Content>
                        <S.Icon>
                            <Icon name="angle-right" size={18} color="#999"/>
                        </S.Icon>
                    </S.Repo>
                ))}
            </ScrollView>
            <StatusBar style="auto" />
        </S.Container>
    )
}
