import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, ScrollView, StatusBar as StatusBarReact, Linking, Button, View, FlatList, ActivityIndicator } from 'react-native'

import Markdown from 'react-native-markdown-display';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../Services/api'

import * as S from './styles'
import Modal from '../../Components/Modal';
import Labels from '../../Components/Labels';
import VacancieCard from '../../Components/VacancieCard';


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
      "id": -1,
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
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [noMore, setNoMore] = React.useState(false);
    const [repository, setRepository] = React.useState(repoDefault)
    const [vacanncies, setVacancies] = React.useState(vagas);
    const [modalVisible, setModalVisible] = React.useState(false)
    const [modalTitle, setModalTitle] = React.useState('')
    const [modalContent, setModalContent] = React.useState('')
    const [actionModal, setActionModal] = React.useState('')
    const [showLabels, setShowLabels] = React.useState(false)

    const { repoId } = route.params;

    const renderItem = ({item}) => (
      <React.Fragment key={item.id}>
        <S.Vacancie 
          //onPress={() => Linking.openURL(vaga.html_url)}
          onPress={() => {
              setModalTitle(item.title)
              setModalContent(item.body)
              setActionModal(item.html_url)
              setModalVisible(true)
          }}
        >
          <S.Image 
              source={{
                  uri: item.user.avatar_url,
              }}
          />
          <S.Content>
              <Text>{item.title}</Text>
              <S.Description>{item.user.login}</S.Description>
          </S.Content>
          <S.Icon>
              <Icon name="angle-right" size={18} color="#999"/>
          </S.Icon>
        </S.Vacancie>
        <Labels labels={item.labels} showLabels={showLabels}/>
      </React.Fragment>
    )

    function loadVacancie() {
      if (loading || noMore) return;

      setLoading(true);

      api.get(`repos/${repoId}/vagas/issues?page=${page}&per_page=30`).then((response) => {
        if(response.data.length === 0) {
          setNoMore(true)
          setLoading(false);
          return
        }
        const newVacancies = vacanncies[0].id === -1 ? [] : [...vacanncies];
        setVacancies([...newVacancies , ...response.data])
        setPage(page + 1);
        setLoading(false);
      });
    }

    const renderFooter = () => {
      if (!loading) return null;
      return (
        <View style={{margin: 20}}>
          <ActivityIndicator size="large" color="#3498db" />
        </View>
      );
    };

    React.useEffect(() => {
        api.get(`repos/${repoId}/vagas`).then((response) => {
            setRepository(response.data)
        });

        loadVacancie();
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
            <S.CountVagas>{`${repository.open_issues_count} vagas abertas 😀`}</S.CountVagas>
            <FlatList
              contentContainerStyle={{padding: 30, alignItems: 'center' }}
              onEndReached={loadVacancie}
              onEndReachedThreshold={0.1}
              data={vacanncies}
              renderItem={renderItem}
              // renderItem={({item}) => (
              //   <VacancieCard 
              //     item={item} 
              //     setModalTitle={setModalTitle} 
              //     setModalContent={setModalContent} 
              //     setActionModal={setActionModal} 
              //     setModalVisible={setModalVisible} 
              //     showLabels={showLabels}
              //   />
              // )}
              ListFooterComponent={renderFooter}
            />
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
