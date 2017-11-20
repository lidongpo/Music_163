import React from 'react';
import {List} from '../../component/List/index'
const Index=({prop})=>{
    return(<div>
        {
            !prop.loading?"":prop.data.data_arr.map((item,index)=>{
                return <List prop={item.list} value={item.list.name} key={index} display={item.list.data.length==3?"g-2-b1":"g-3"} />
            })
        }
        
        <button onClick={()=>{prop.goToDetail();prop.history.push('/cd')}}>去详情页面</button>
        </div>)
}
export default Index;