import React,{Component} from 'react'

class List extends Component {
    goToCd(){
        console.log(this.props)
        this.props.dis.dispatch({type: 'detail',detail:true});
        this.props.dis.history.push('/')
    }
    render(){
        return(<div>
            <h1>详情页</h1>
            <button onClick={()=>{this.goToCd()}}>去首页吧</button>
            </div>)
    }
}
export default List;