import React from 'react';
import {List} from '../../component/List/index'

const Index=({prop})=>{
    return(<div>
        <List value="厕所" />
        <button onClick={()=>{prop.goToDetail();prop.history.push('/cd')}}>去详情页面</button>
        </div>)
}
export default Index;