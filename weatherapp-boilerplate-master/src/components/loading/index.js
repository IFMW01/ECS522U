// import preact
import { h, render, Component } from 'preact';
import Button from '../button';

import Icon from '../icon'; //Imported

import Auth from '../auth'; //Imported 

import Link from '../link'; //Imported

import City from '../city'

import Iphone from '../iphone';

import style from '../iphone/style';

import loadingStyle from './style.less';

export default class Loading extends Component {

    	// the main render method for the login component
	render() {
		return (
			<div class={ style.container }>
				<div> <Icon src = "../../assets/icons/WeWeatherIcon.png" width = '150' ></Icon> </div>
                <div class = {loadingStyle.text}>
						<p>Loading your next great escape...</p>
				</div>
                <div> <Icon src = "../../assets/icons/loadingIcon.gif" width = '150' ></Icon> </div>
			</div>
			
		);
	}

	
}
