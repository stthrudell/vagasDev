import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const Repo = styled.View `
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${props => parseInt(props.statusBarHeight)}px;
    padding-bottom: 10px;
`

export const Vacancie = styled.TouchableOpacity `
    width: 100%;
    background: #fff;
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

export const Image = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 100px;
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
export const VagaTitle = styled.Text`
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export const VagaDescription = styled.Text`
    padding: 10px;
    padding-bottom: 0px;
`

export const CountVagas = styled.Text`
    font-size: 22px;
`

export const IconLabel = styled.TouchableOpacity`
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    right: 30px;
    z-index: 2;
`
