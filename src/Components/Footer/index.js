import React from 'react'
import { View } from 'react-native'

import * as S from './style'


export default function Footer({navigation}) {
    return (
        <S.Footer>
            <S.Text>Made with &#9829; and &#127866;</S.Text>
            <S.Span>Inspirado no projeto <S.Span>vagasExplorer</S.Span></S.Span>
        </S.Footer>
    )
}
