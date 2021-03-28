import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
`

export const Modal = styled.View`
    height: 80%;
    align-items: center;
    background: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 30px;
`

export const Close = styled.TouchableOpacity`
    position: absolute;
    right: 15px;
    top: 15px;
`