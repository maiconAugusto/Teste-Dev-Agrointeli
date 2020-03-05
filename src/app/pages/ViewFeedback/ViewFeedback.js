import React from 'react';
import { Background } from '../index';
import { ViewCard, Card, Avatar, Container, TextInfo, TextAlertInfo,TextNameAlert } from './index';
import { Icon } from 'react-native-elements';
import ProgressBar from '../../components/ProgressBar';

const ViewFeedback= ({router,navigation}) =>{
    const condition = navigation.getParam('condition')
    const quantity = navigation.getParam('quantity')
    const name = navigation.getParam('name')
    return(
        <Background>
            <ViewCard>
                <Card>
                    <Avatar condition = {condition}>
                        <Icon
                        containerStyle={{marginTop: 18}}
                        name={condition === true ? 'check': 'error-outline'}
                        size={40}
                        color='white'/>
                    </Avatar>
                    {condition === true ? 
                        <>
                            <TextAlertInfo alert={condition}>{name}.</TextAlertInfo>
                            <TextAlertInfo alert={condition}>Incidência de praga dentro do controle.</TextAlertInfo>
                        </> :
                        <>  
                            <TextNameAlert>{name}.</TextNameAlert>
                            <TextAlertInfo alert={condition}>Atenção!</TextAlertInfo>
                            <TextAlertInfo alert={condition}>A incidência desta praga está fora de controle.</TextAlertInfo>
                        </>
                    }
                    <Container>
                        <ProgressBar quantity={quantity} size={280}/>
                        <TextInfo>{((quantity / 250) * 100).toFixed(2)}%</TextInfo>
                    </Container>
                </Card>
            </ViewCard>
        </Background>
    )
}
export default ViewFeedback;