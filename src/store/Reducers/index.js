const defaultState={
    detail:false
}
export const reducer= function(state=defaultState,action){
    switch(action.type){
        case 'detail':
        return Object.assign({},state,{detail:!action.detail})
        default:
        return state
    }
}