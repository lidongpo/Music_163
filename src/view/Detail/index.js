import React from 'react'

const Index=({prop})=>{
    return(<div>
        <h1>详情页</h1>
        <button onClick={()=>{prop.goToHome();prop.history.push('/')}}>去首页吧</button>
        </div>)
}
export default Index;