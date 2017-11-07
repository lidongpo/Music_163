import React, { Component } from 'react';
import {connect} from 'react-redux'
import Index from '../component/Home/index'
const home=function(props){
    return(<Index dis={props} />)
}
const Home =connect()(home);

export default Home;