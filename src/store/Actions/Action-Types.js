export const DETAIL_PAGE = "DETAIL_PAGE"
export const SAVE_DATA = "SAVE_DATA"
export const LOADING ='LOADING'
const data_arr=[];
let temp_Num=0;
export const detail_Page = (detail) => {
    return {
        type: DETAIL_PAGE,
        detail: detail
    }
}
export const save_Data = (data,name,len) => {
    let temp={
        data:data.result,
    }
    temp.name=name
    data_arr.push({"list":temp})
    return {
        type: SAVE_DATA,
        data:{
            data_arr
        }
    }
}

export const load_status =(status)=>{
    return{
        type:LOADING,
        loading:status
    }
}

 function fetchPosts(obj,len) {
    return (dispatch) => {
        return fetch('api/'+obj.url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                dispatch(save_Data(json,obj.name,len))
                ++temp_Num
                if(temp_Num==len){
                    dispatch(load_status(true))
                }else{
                    dispatch(load_status(false))
                }

            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

export const fetchPostsIfNeeded=(obj,len)=>{
    return(dispatch,getState)=>{
        return dispatch(fetchPosts(obj,len))
    }
}