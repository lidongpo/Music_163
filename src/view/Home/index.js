import React from 'react';
import {List} from '../../component/List/index'
const Index=({prop})=>{
    return(<div>
        <List value="推荐歌单" prop={prop} />
        {/* <List value="独家放送" prop={prop} /> */}
        <button onClick={()=>{prop.goToDetail();prop.history.push('/cd')}}>去详情页面</button>
        </div>)
}
export default Index;