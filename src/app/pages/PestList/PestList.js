import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import api from '../../../config/api';
import { Icon } from 'react-native-elements';
import Progress from '../../components/ProgressBar';
import { Background } from '../index';
import { TitlePage, ButtomRefresh, Text, TouchList, SpaceIcon, SpaceName } from './index';
import Header from '../../components/Header/Header';


const PestList = ({navigation}) =>{
    const [pests, setPests]= useState([]);
    const [loading, setloading]= useState(false)

    useEffect(()=>{
        PestListData()
    },[])

    async function PestListData(){
        try{
            setloading(true)
            const response = await api.get('')
                .then((response)=>{
                    const { data } = response;
                    setPests(data);
                    setloading(false);
                })
                .catch(()=>{
                    setloading(false);
                })
        }
        catch(err){
            setloading(false)
        }
    }
    function renderItem(item){
        return(
                <TouchList  onPress={()=> navigation.navigate('FeedBack',{ 
                    name: item.name, quantity: item.quantity, 
                    condition: ((item.quantity / 250) * 100) >= 30 ? false : true})}>
                    <SpaceName>
                        <Text ellipsizeMode={"middle"}>{item.name}</Text>
                        <Progress quantity={item.quantity} size={180}/>
                    </SpaceName>
                    <SpaceIcon>
                        <Icon
                        name='navigate-next'
                        color='#757575'
                        />
                    </SpaceIcon>
                </TouchList>
        )
    }
    return (
        <Background>
            <Header/>
            <TitlePage>controle de pragas</TitlePage>
            {loading === true ? <ActivityIndicator style={{marginTop: 40}} color='#005D00' size={40}/> 
            : 
            <FlatList
            style={{position:'relative'}}
            data={pests}
            renderItem={({item})=> renderItem(item)}
            keyExtractor={(item,index)=> index.toFixed()}
            />
            }
            <ButtomRefresh>
                <Icon
                raised
                onPress={()=>{PestListData()}}
                name='refresh'
                size={30}
                color='#005D00'
                type='font-awesome'
                />
            </ButtomRefresh>
        </Background>
    )
}
export default PestList;