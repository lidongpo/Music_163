import React from 'react';
export const List = (prop) => {
    console.log(prop)
    return (
        <div>

            <div className='container'>
                <div className='list-title'>{prop.value} <i className='iconfont'></i></div>
                <div className='list'>
                    <ul>
                        {/* {prop.location.state.result.map((name) => { */}
                            {/* return ( */}
                                {/* <li className='item'>name.name</li> */}
                            {/* ) */}
                        {/* }) */}
                        {/* } */}
                    </ul>
                </div>
            </div>

        </div>

    )
}
