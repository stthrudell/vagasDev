import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const Repo = styled.TouchableOpacity `
    width: 100%;
    background: #fff;
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Image = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 3px;
    margin-right: 10px;
`

export const Content = styled.View`
    width: 70%;
`

export const Description = styled.Text`
    font-size: 10px;
    flex: 1;
`

export const Icon = styled.Text`
    justify-content: center;
    align-items: center;
    flex: 1%;
    padding: 10px;
`
