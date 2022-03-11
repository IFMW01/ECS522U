// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';

import Icon from '../icon'; //Imported

import Auth from '../auth'; //Imported 

import Link from '../link'; //Imported

import City from '../city';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		// button display state
		this.setState({ display: true });
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=a973e9ecb5306d7f24b59a3677a25b3c";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		
		// display all weather data
		return (
			// <div>
			// 	<City name='London' date ='06.09.2023' temp='12'> </City>
			// </div>
			<div class={ style.container }>
				{/* <div class={ style.header }>
					<div class={ style.city }>{ this.state.locate }</div>
					<div class={ style.conditions }>{ this.state.cond }</div>
					<span class={ tempStyles }>{ this.state.temp }</span>
				</div>
				<div class={ style.details }></div> */}
				<div> <Icon src = "../../assets/icons/WeWeatherIcon.jpeg" width = '100' >Welcome to WeWeather</Icon> </div>
				<div><Auth></Auth></div>
				<div class = {style.mediaBox}>

					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/fbIcon.webp" href ='https://en-gb.facebook.com/'></Link>
					</div>
					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/googleIcon.jpeg" href ='https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1'></Link>
					</div>
					<div class = {style.socialMediaLinks}>
						<Link style = 'width:100%'src = "../../assets/icons/instagram.jpeg" href ='https://www.instagram.com/'></Link>
					</div>


				</div>
								{/* <div class= { style_iphone.container }> 
						{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData }/ > : null }
					</div> */}
			</div>
			
		);
	}

	parseResponse = (parsed_json) => {
		var location = parsed_json['name'];
		var temp_c = parsed_json['main']['temp'];
		var conditions = parsed_json['weather']['0']['description'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions
		});      
	}
}
