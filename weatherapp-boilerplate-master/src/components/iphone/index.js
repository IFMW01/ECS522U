import Router from 'preact-router'; //ADDED DEPENDANCY EXPLAIN IN VIDEO!!1
import { h, render, Component } from 'preact';

import Loading from '../loading';



import Login from '../login'
import MainPage from '../mainPage';

export default class Iphone extends Component {


	// the main render method for the iphone component
	render(){
		return (
			<Router>
				<Login path = '/' />
				<Loading path = '/loading' />
				<MainPage path = '/mainPage' />
			</Router>
		);
	};

}
