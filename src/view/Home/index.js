import React from 'react';
import {List} from '../../component/List/index'
const Index=({prop})=>{
    console.log(prop.data)
    return(<div>
        {/* {
            prop.data.data_arr.map((i)=>{
                console.log(i)
                return(
                    <List prop={prop} />
                
            })
        }
         */}
        <button onClick={()=>{prop.goToDetail();prop.history.push('/cd')}}>去详情页面</button>
        </div>)
}
export default Index;