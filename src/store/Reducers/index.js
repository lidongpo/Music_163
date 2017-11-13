import {DETAIL_PAGE,SAVE_DATA} from '../Actions/Action-Types'
export const reducer= function(state={detail:false},action){
    switch(action.type){
        case DETAIL_PAGE:
        return Object.assign({},state,{detail:action.detail})
        case SAVE_DATA:
        return Object.assign({},state,{data:action.data})
        default:
        return state
    }
}