import 'react-native';
import React from 'react';
import ProgressBar from '../src/app/components/ProgressBar';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('passing props to component', ()=>{
    let wrapper = shallow(<ProgressBar quantity={91}/>).props();
    expect(wrapper.progress).toEqual(0.364)
})