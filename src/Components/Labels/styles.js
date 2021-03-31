import styled from 'styled-components/native'

export const Labels = styled.View`
    border: 1px solid #e0e0e0;
    position: relative;
    top: -15px;
    right: -${props => props.deviceWidth ? props.deviceWidth / 10 : 40}px;
    padding: 5px;
    padding-top: 10px;
    z-index: 0;
    max-width: 80%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${props => props.showLabels ? 100 : 0}%;
    height: ${props => props.showLabels ? 'auto' : 0};
    ${props => props.showLabels ? `transform: scale(1)` : `transform: scale(0)`}
`

export const LabelName = styled.Text`
    color: #000;
    background: #${props => props.background};
    margin: 2px;
    border-radius: 2px;
    padding: 0 5px;
`