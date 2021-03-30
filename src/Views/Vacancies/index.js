import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, StatusBar as StatusBarReact, Linking, Button, View } from 'react-native'

import Markdown from 'react-native-markdown-display';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../Services/api'

import * as S from './styles'
import Modal from '../../Components/Modal';
import Labels from '../../Components/Labels';


const repoDefault = {
    "id": 51001484,
    "full_name": "frontendbr/vagas",
    "owner": {
      "login": "Carregando...",
      "avatar_url": "...",
      "html_url": "https://github.com/frontendbr",
    },
    "description": "...",
  }

const vagas = [
    {
      "html_url": "https://github.com/frontendbr/vagas/issues/4555",
      "id": 842522809,
      "number": 4555,
      "title": "Carregando vagas...",
      "user": {
        "login": "...",
        "id": 51677836,
        "avatar_url": "https://i1.wp.com/alkiansgroup.com/wp-content/uploads/2018/11/male-placeholder-image.jpg?fit=1000%2C1000&ssl=1",
      },
      "labels": [],
      "body": "Carregando...",
    },
  ]

export default function Vacancies({ route, navigation }) {
    const [repository, setRepository] = React.useState(repoDefault)
    const [vacanncies, setVacancies] = React.useState(vagas);
    const [modalVisible, setModalVisible] = React.useState(false)
    const [modalTitle, setModalTitle] = React.useState('')
    const [modalContent, setModalContent] = React.useState('')
    const [actionModal, setActionModal] = React.useState('')
    const [showLabels, setShowLabels] = React.useState(false)

    const { repoId } = route.params;

    React.useEffect(() => {
        api.get(`repos/${repoId}/vagas`).then((response) => {
            setRepository(response.data)
        });

        api.get(`repos/${repoId}/vagas/issues`).then((response) => {
            setVacancies(response.data)
        });
    }, [])

    return (
        <S.Container>
            <S.IconLabel style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              
              elevation: 15,
            }}
              onPress={() => setShowLabels(!showLabels)}
            >
                {showLabels ? <Icon name="eye-slash" size={28} color="#999"/> : <Icon name="eye" size={28} color="#999"/>}
            </S.IconLabel>
            <S.Repo statusBarHeight={StatusBarReact.currentHeight}>
                <S.Image 
                    source={{
                        uri: repository.owner.avatar_url,
                    }}
                />
                <S.Content>
                    <Text>{repository.owner.login}</Text>
                    <S.Description>{repository.description}</S.Description>
                </S.Content>
            </S.Repo>
            <ScrollView contentContainerStyle = {{alignItems: 'center', padding: 30}} >
                <S.CountVagas>{`${vacanncies.length} vagas abertas 😀`}</S.CountVagas>
                {vacanncies.map(vaga => (
                    <React.Fragment key={vaga.id} >
                      <S.Vacancie 
                          //onPress={() => Linking.openURL(vaga.html_url)}
                          onPress={() => {
                              setModalTitle(vaga.title)
                              setModalContent(vaga.body)
                              setActionModal(vaga.html_url)
                              setModalVisible(true)
                          }}
                      >
                          <S.Image 
                              source={{
                                  uri: vaga.user.avatar_url,
                              }}
                          />
                          <S.Content>
                              <Text>{vaga.title}</Text>
                              <S.Description>{vaga.user.login}</S.Description>
                          </S.Content>
                          <S.Icon>
                              <Icon name="angle-right" size={18} color="#999"/>
                          </S.Icon>
                      </S.Vacancie>
                      <Labels labels={vaga.labels} showLabels={showLabels}/>
                    </React.Fragment>

                ))}
            </ScrollView>
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <S.VagaTitle>{modalTitle}</S.VagaTitle>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Markdown>
                    {modalContent}
                  </Markdown>
                </ScrollView>
                <Button
                    title="Abrir no github"
                    onPress={() => {
                        Linking.openURL(actionModal)
                    }}
                />
            </Modal>
            <StatusBar style="auto" />
        </S.Container>
    )
}
