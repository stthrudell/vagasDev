import React from 'react'
import { Text, Modal as ModalReact, Button, ScrollView} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';


import * as S from './styles'


export default function Modal({modalVisible, setModalVisible, children}) {

    return(
        
          <ModalReact
            animationType={'slide'}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
          >
              <S.Container >
                
                    <S.Modal style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        
                        elevation: 24,
                    }}>
                        
                        <S.Close 
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        >
                            <Icon name="close" size={18} color="#999"/>
                        </S.Close>
                        <ScrollView>
                            {children}
                        </ScrollView>
                    </S.Modal>
            </S.Container>
          </ModalReact>
    );
}
