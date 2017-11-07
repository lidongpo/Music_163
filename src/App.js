import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';
import { connect } from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from './store/index'
import Home from './view/Home';
import About from './view/About';
import Detail from './view/Detail'
const NavBar = () => {
	return (
		<div>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/cd' component={Detail} />
		</div>
	)
}
const Tab = () => {
	return (
		<ul>
			<li><NavLink to='/'>首页</NavLink>
			</li><li><NavLink to='/about'>关于</NavLink></li>
		</ul>
	)
}

const app = ( {detail} ) => {
	if (!detail) {
		return (
			<div>
				<Tab />
				<NavBar />
			</div>
		)
	}
	return (
		<NavBar />
	)
}
const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(app)
export default App;