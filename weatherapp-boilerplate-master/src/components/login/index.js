// import preact
import { h, render, Component } from 'preact';

import Icon from '../icon'; //Imported Component

import Auth from '../auth'; //Imported Component

import Link from '../link'; //Imported Component

import Iphone from '../iphone'; //Imported Component

import style from '../iphone/style'; //Imported Component Styling 

export default class Login extends Component {

    	// the main render method for the login component
	render() {
		return (
			<div class={ style.container }>
				<div> <Icon src = "../../assets/icons/WeWeatherIcon.png" width = '150' >Welcome to WeWeather</Icon> </div> {/* Using the Icon component*/}
				<div><Auth></Auth></div>  {/* Using the Auth Component that handles users login*/}
				<div class = {style.mediaBox}>
					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/fbIcon.webp" href ='https://en-gb.facebook.com/'></Link>  {/* Using the Link */}
					</div>
					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/google.png" href ='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'></Link> {/* Using the Link */}
					</div>
					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/instagram.png" href ='https://www.instagram.com/'></Link> {/* Using the Link */}
					</div>


				</div>
			</div>
			
		);
	}

	
}
