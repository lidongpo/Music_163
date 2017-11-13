import React,{Component} from 'react';
import { connect } from 'react-redux'
import Index from '../view/Home/index'
import {save_Data,fetchPostsIfNeeded} from '../store/Actions/Action-Types'
import { mapStateToProps, mapDispatchToProps } from '../store/index'
class home extends Component{
    
    componentDidMount(){
        this.props.dispatch(fetchPostsIfNeeded("personalized"))
    }
    render(){
        return (<Index prop={this.props} />)
    }
}

const Home = connect(
    mapStateToProps
)(home);

export default Home;