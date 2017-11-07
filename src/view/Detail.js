import React, { Component } from 'react';
import {connect} from 'react-redux'
import Index from '../component/Detail/index'

const detail=function(props){
    return(<Index dis={props} />)
}
const Detail =connect()(detail);
export default Detail;