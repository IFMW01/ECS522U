// import preact
import { h, render, Component } from 'preact';
import style_cities from './styles_cities'
export default class city extends Component {

	// rendering a function when the button is clicked
    //Adding a variable for the image src
    //TODO: Move styling to LESS
	WeatherIcon(ctemp) {
		if(ctemp>16){
			return '../../assets/icons/sun.png'
			
		}
		else{
			let icon ='../../assets/icons/rain.png'
			return icon
		}
		
	}
	

	render() {
		let cname = this.props.name;
		let ctemp = this.props.temp;
		let cdates = this.props.date;
		return (
			<div class = {style_cities.container}>
				<div class ={style_cities.mediaBox}>
					<div class={style_cities.cityName}>
						<div style='width:100%'>
							<h2>{cname}</h2>
							<p>{cdates}</p>
						</div>
					</div>
					<div class ={style_cities.weatherData}>
						<div class = {style_cities.tempInfo}>
							<div style='width:100%'>
								
									<img src={this.WeatherIcon(ctemp)} width ='60'></img>
							
							</div>
							
						</div>
					</div>
				</div>
				
				
            </div>
		);
	}

	
}
