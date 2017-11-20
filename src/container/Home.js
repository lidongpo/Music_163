import React,{Component} from 'react';
import { connect } from 'react-redux'
import Index from '../view/Home/index'
import {fetchPostsIfNeeded,load_status} from '../store/Actions/Action-Types'
import { mapStateToProps } from '../store/index'
class home extends Component{
    componentDidMount(){
        const data=[
            {url:"personalized",name:"推荐歌单"},
            {url:"personalized/privatecontent",name:"独家放送"}
        ]
        for(let i in data){
            this.props.dispatch(fetchPostsIfNeeded(data[i],data.length))
        }
        
    }
    render(){
        return (<Index prop={this.props} />)
    }
}

const Home = connect(
    mapStateToProps
)(home);

export default Home;