import React,{Component} from 'react'

class List extends Component {

    goToCd(){
        console.log(this.props)
        this.props.dis.dispatch({type: 'detail',detail:false});
        this.props.dis.history.push('/cd')
    }
    render(){
        return(<div>
            <h1>首页</h1>
            <button onClick={()=>{this.goToCd()}}>去详情页面</button>
            </div>)
    }
}
export default List;