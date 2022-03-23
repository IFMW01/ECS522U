// import preact
import { h, render, Component } from 'preact';

import Button from '../button';

import Icon from '../icon'; //Imported component

import Auth from '../auth'; //Imported component

import Link from '../link';//Imported component

import Iphone from '../iphone'; //Imported component

import style from '../iphone/style'; //Imported component styling

import loadingStyle from './style.less'; //Imported component styling

export default class Loading extends Component {

	componentDidMount() { {/* Method used for routing to the main page, usess a buffer time to display loading page for a 1000 m/s*/}
        redirectTimeout = setTimeout(() => {
            window.location.href = '/mainPage'
        }, 1000);

      }

    	// the main render method for the looading component
	render() {
		return (
			<div class={ style.container }>

				<div> <Icon src = "../../assets/icons/WeWeatherIcon.png" width = '150' ></Icon> </div> {/* Uses the Icon component*/}
                <div class = {loadingStyle.text}>
						<p>Loading your next great escape...</p>
				</div>
                <div> <Icon src = "../../assets/icons/loadingIcon.gif" width = '150' ></Icon> </div> {/* Uses the Icon component*/}
			</div>
			
		);
	}

	
}
