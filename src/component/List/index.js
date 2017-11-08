import React, { Component } from 'react';
export const List =(prop)=>{
    return(
        <div className='container'>
            <div className='list-title'>{prop.value}</div>
            <div className='list'>
                <ul>
                    <li className='item'>liebiao</li>
                </ul>
            </div>
        </div>
    )
}