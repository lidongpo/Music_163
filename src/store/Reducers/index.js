import {DETAIL_PAGE,SAVE_DATA,LOADING} from '../Actions/Action-Types'
export const reducer= function(state={detail:false},action){
    switch(action.type){
        case DETAIL_PAGE:
        return Object.assign({},state,{detail:action.detail})
        case SAVE_DATA:
        return Object.assign({},state,{data:action.data})
        case LOADING:
        return Object.assign({},state,{loading:action.loading})
        default:
        return state
    }
}