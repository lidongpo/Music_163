import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {detail_Page} from '../store/Actions/Action-Types'
import {reducer} from './Reducers/index';
const configureStore = applyMiddleware(thunk)(createStore)
export const store=configureStore(reducer)


// store.subscribe(()=>{
//     console.log(store.getState())
// })
export const mapStateToProps= function (state) {
  console.log(state)
    return {
        detail: state.detail,
        data:state
    }
  }
  export const mapDispatchToProps  = function (dispatch) {
    return {
      goToDetail: () => dispatch(detail_Page(true)),
      goToHome: () => dispatch(detail_Page(false)),
      saveState:(data)=>dispatch(data)
    }
  }
