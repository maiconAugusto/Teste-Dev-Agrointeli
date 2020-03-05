import styled from 'styled-components/native'

export const ViewCard = styled.View`
    display :flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`
export const Card = styled.View`
    display: flex;
    align-items: center;
    width: 90%;
    height: 50%;
    background-color: #ffffff;
    border-radius : 6px;
    position: absolute;
`
export const Avatar = styled.View`
    right: 5px;
    bottom: 50px;
    left: 5px;
    position: relative;
    height: 90px;
    width: 90px;
    border-radius: 100px;
    border: 6px #ffffff solid;
    background-color: ${props=> props.condition === true ? '#56F968' : '#FF6161'};
`
export const Container = styled.View`
    display:flex;
    flex-direction:row;
    align-items: center;
`
export const TextInfo = styled.Text`
    color: #333333;
    font-size: 14px;
`
export const TextAlertInfo = styled.Text`
    color: ${props=> props.alert === true ? '#333333' : 'red'};
    font-size: 14px;
    margin-bottom: 20px;
`
export const TextNameAlert = styled.Text`
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
`
