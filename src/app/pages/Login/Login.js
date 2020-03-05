import React,{ useEffect, useState } from 'react'
import { Animated } from 'react-native'
import { PageLogin, Form, InputForm, ButtonForm, TextFormButton } from './index'

const Login= ({navigation}) =>{
    const[offset] = useState( new Animated.ValueXY({x: 100, y: 0}))
    useEffect(()=>{
        Animated.spring(offset.x,{
            toValue: 0,
            speed: 1,
            bounciness: 4,
        }).start();
    },[])
    return(
        <PageLogin>
            <Form as={Animated.View} style={{transform:[{translateX: offset.x}]}}>
                <InputForm placeholder="Admin" editable={false}/>
                <InputForm placeholder="******" editable={false}/>
                <ButtonForm onPress={()=> navigation.push('Home')}>
                    <TextFormButton>
                        Acessar
                    </TextFormButton>
                </ButtonForm>
            </Form>
        </PageLogin>
    )
}
export default Login;
