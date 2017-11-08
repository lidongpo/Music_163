import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,
	Route} from 'react-router-dom';
import {store} from './store/index'
import './assets/style/common.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Route path='/' component={App} />
        </Router>
        
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
