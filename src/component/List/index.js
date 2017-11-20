import React from 'react';
import './index.scss'
export const List = (prop) => {
    console.log(prop)
    return (
        <div> <div className='container'>
                <div className='list-title'>{prop.value}<i className='iconfont'></i></div>
                <div className='list'>
                    <ul className={'m-cd '+prop.display}>
                        {
                            prop.prop.data.map((item,index)=>{
                                return <li className='m-cd-item' key={index}>
                                    <img src={item.picUrl} alt=""/>
                                    <p>{item.name}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>

    )
}
