import React from 'react';
import { StatusBar } from 'react-native';
import Router from './router/router';

const App= () =>{
  return (
    <>
      <StatusBar backgroundColor='#005D00' barStyle='dark-content'/>
      <Router/>
    </>
  )
}
export default App;
