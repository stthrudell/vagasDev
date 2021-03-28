import React from 'react'
import { Text } from 'react-native';

import * as S from './styles'

export default function Labels({labels, showLabels}) {


    if(!labels) return null;
    return (
        <S.Labels showLabels={showLabels}>
            {labels.map(label => (
                <S.LabelName key={label.id} background={label.color}>{label.name}</S.LabelName>
            ))}
        </S.Labels>
    )
}
