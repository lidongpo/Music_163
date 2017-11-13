import React,{Component} from 'react';
import { connect } from 'react-redux'
import Index from '../view/Home/index'
import {save_Data,fetchPostsIfNeeded} from '../store/Actions/Action-Types'
import { mapStateToProps, mapDispatchToProps } from '../store/index'
class home extends Component{
    
    componentDidMount(){
        
        const data=[
            {url:"personalized",name:"personalized"},
            {url:"personalized/privatecontent",name:"privatecontent"}
        ]
        for(let i in data){
            this.props.dispatch(fetchPostsIfNeeded(data[i],data[i].name))
        }
        
    }
    render(){
        console.log(this.props)
        return (<Index prop={this.props} />)
    }
}

const Home = connect(
    mapStateToProps
)(home);

export default Home;