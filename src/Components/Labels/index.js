import React from 'react'
import { Dimensions } from 'react-native';

import * as S from './styles'

export default function Labels({labels, showLabels}) {

    const deviceWidth = Dimensions.get('window').width

    if(!labels) return null;
    return (
        <S.Labels showLabels={showLabels} deviceWidth={parseInt(deviceWidth)}>
            {labels.map(label => (
                <S.LabelName key={label.id} background={label.color}>{label.name}</S.LabelName>
            ))}
        </S.Labels>
    )
}
