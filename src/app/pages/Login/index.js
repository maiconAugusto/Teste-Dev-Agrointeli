import styled from 'styled-components/native'

export const PageLogin = styled.View`
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    width: 100%;
    background-color: #327F26;
`
export const Form = styled.View`
    display: flex;
    justify-content: center;
    height: 350px;
    width: 94%;
    background-color: #57A247;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 130px;
`
export const InputForm = styled.TextInput`
    height: 50px;
    background-color: white;
    margin: 0 14px 6px 14px;
    border-radius: 6px;
`
export const ButtonForm = styled.TouchableOpacity`
    justify-content:center;
    height: 50px;
    border: 1px white solid;
    margin: 20px 14px 4px 14px;
    border-radius: 80px;
`
export const TextFormButton = styled.Text`
    font-size: 16px;
    text-align: center;
    color: white
`