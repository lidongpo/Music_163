export const DETAIL_PAGE = "DETAIL_PAGE"
export const SAVE_DATA = "SAVE_DATA"
const data_arr=[];
export const detail_Page = (detail) => {
    return {
        type: DETAIL_PAGE,
        detail: detail
    }
}
export const save_Data = (data,name) => {
    data_arr.push({[name]:data})
    return {
        type: SAVE_DATA,
        data:{
            data_arr
        }
    }
}

 function fetchPosts(obj) {
    return (dispatch) => {
        return fetch('api/'+obj.url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                dispatch(save_Data(json,obj.name))
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

export const fetchPostsIfNeeded=(obj)=>{
    return(dispatch,getState)=>{
        return dispatch(fetchPosts(obj))
    }
}