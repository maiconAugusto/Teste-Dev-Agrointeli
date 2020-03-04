import React from 'react';
import { StatusBar } from 'react-native';
import Router from './router/router';

const App= () =>{
  return (
    <>
      <StatusBar backgroundColor='#005D00'/>
      <Router/>
    </>
  )
}
export default App;
