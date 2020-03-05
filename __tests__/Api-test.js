import 'react-native'
import React from 'react'
import Api from '../src/config/api'

describe('test api case', ()=>{
    it('test api',async()=>{
        const response = await Api.get('')
        expect(response.data[2].name).toEqual('Falsa Medideira');
    })
})
