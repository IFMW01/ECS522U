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
					<table class={style_cities.container}>
						<tr>
							<th style="width:60%"></th>
							<th style="width:20%"></th>
							<th style="width:20%"></th>
						</tr>
  						<tr>
								
							<td class={style_cities.cityName} ><h1>{cname}</h1> <br> </br> <p>{cdates}</p></td>
							<div style="float:right">
								<td class = {style_cities.tempInfo} style="width:20%">{ctemp}</td>
								<td  class = {style_cities.tempIcon} style="width:20%"><img src={this.WeatherIcon(ctemp)} width ='100'></img></td>
							
							</div>
							
 						</tr>
					</table>
					
		);
	}

	
}
