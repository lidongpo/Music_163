import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {detail_Page} from '../store/Actions/Action-Types'
import {reducer} from './Reducers/index';
export const store = createStore(reducer,applyMiddleware(thunk));



store.subscribe(()=>{
    console.log(store.getState())
})
export const mapStateToProps= function (state) {
    return {
        detail: state.detail
    }
  }
  export const mapDispatchToProps  = function (dispatch) {
    return {
      goToDetail: () => dispatch(detail_Page(true)),
      goToHome: () => dispatch(detail_Page(false)),
    }
  }
