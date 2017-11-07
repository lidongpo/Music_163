import React from 'react'

const Index=({prop})=>{
    return(<div>
        <h1>首页</h1>
        <button onClick={()=>{prop.goToDetail();prop.history.push('/cd')}}>去详情页面</button>
        </div>)
}
export default Index;