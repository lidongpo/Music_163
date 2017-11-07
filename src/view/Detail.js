import React, { Component } from 'react';
import {connect} from 'react-redux'
import Index from '../component/Detail/index'
import {mapStateToProps,mapDispatchToProps} from '../store/index'
const detail=(props)=>{
    props.goToDetail()
    return(<Index prop={props} />)
}
const Detail =connect(
    mapStateToProps,
    mapDispatchToProps
)(detail);
export default Detail;