export const DETAIL_PAGE = "DETAIL_PAGE"
export const SAVE_DATA = "SAVE_DATA"

export const detail_Page = (detail) => {
    return {
        type: DETAIL_PAGE,
        detail: detail
    }
}
export const save_Data = (k,data) => {
    return {
        type: SAVE_DATA,
        [k]:data
    }
}

 function fetchPosts(url) {
    return (dispatch) => {
        return fetch('api/'+url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                dispatch(save_Data(url,json))
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
}

export const fetchPostsIfNeeded=(url)=>{
    return(dispatch,getState)=>{
        return dispatch(fetchPosts(url))
    }
}