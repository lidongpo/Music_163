import React, { Component } from 'react';
import {connect} from 'react-redux'
import Index from '../component/Home/index'
import {mapStateToProps,mapDispatchToProps} from '../store/index'
const home=(props)=>{
    return(<Index prop={props} />)
}
const Home =connect(
    mapStateToProps,
    mapDispatchToProps
)(home);

export default Home;