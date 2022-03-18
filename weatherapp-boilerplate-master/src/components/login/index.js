// import preact
import { h, render, Component } from 'preact';
import Button from '../button';

import Icon from '../icon'; //Imported

import Auth from '../auth'; //Imported 

import Link from '../link'; //Imported

import City from '../city'

import Iphone from '../iphone';

import style from '../iphone/style';

export default class Login extends Component {

    	// the main render method for the login component
	render() {
		return (
			<div class={ style.container }>
				<div> <Icon src = "../../assets/icons/WeWeatherIcon.png" width = '150' >Welcome to WeWeather</Icon> </div>
				<div><Auth></Auth></div>
				<div class = {style.mediaBox}>
					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/fbIcon.webp" href ='https://en-gb.facebook.com/'></Link>
					</div>
					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/google.png" href ='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'></Link>
					</div>
					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/instagram.png" href ='https://www.instagram.com/'></Link>
					</div>


				</div>
			</div>
			
		);
	}

	
}
