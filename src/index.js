import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import {BrowserRouter as Router,
	Route,
	NavLink} from 'react-router-dom';
import {reducer} from './store/Reducers/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Action
const increaseAction = { type: 'detail'}
const store = createStore(reducer);
function mapStateToProps(state) {
    return {
        detail: state.detail
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: () => dispatch(increaseAction)
    }
  }
const Root=connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
store.subscribe(()=>{
    console.log(store.getState())
})
ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Route path='/' component={Root} />
        </Router>
        
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
