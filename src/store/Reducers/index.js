import {DETAIL_PAGE} from '../Actions/Action-Types'
export const reducer= function(state={detail:false},action){
    switch(action.type){
        case DETAIL_PAGE:
        return Object.assign({},state,{detail:action.detail})
        default:
        return state
    }
}