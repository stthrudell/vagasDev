import React, { PureComponent } from 'react';
import { Text } from 'react-native'

import * as S from './styles'

import Icon from 'react-native-vector-icons/FontAwesome';

import Labels from '../../Components/Labels';

export default function VacancieCard({item, setModalTitle, setModalContent, setActionModal, setModalVisible, showLabels}) {

    return (
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
}

function arePropsEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    return nextProps.item.title === prevProps.item.title
  }

//export default VacancieCard;