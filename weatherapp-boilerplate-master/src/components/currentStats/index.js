import { h, render, Component } from 'preact';

import Icon from '../icon';

import statsStyle from './style.less'

import style from '../iphone/style';

export default class CurrentStats extends Component {

    state = {
        locate : "",
        temp : "",
        temp_low : "",
        temp_high : "",
        cond : "",
        cond2 : ""
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a973e9ecb5306d7f24b59a3677a25b3c&units=metric')
        .then(response => response.json())
        .then(
            (data) => {
                this.setState({
                    locate : data['name'],
                    temp : data['main']['temp'],
                    temp_low : data['main']['temp_min'],
                    temp_high : data['main']['temp_max'],
                    cond : data['weather']['0']['description'],
                    cond2 : data['weather']['0']['main']
                });
        })

        this.setState({
			locate : location,
			temp : temperature,
			temp_low : temperatureLow,
            temp_high : temperatureHigh,
            cond : conditions,
            cond2 : conditions2

		}); 
    }

    fetchCurrentWeather = () => {
        return Math.round(this.state.temp);
    }

    fetchWeatherDescription = () => {
        const arr = this.state.cond.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join(" ");
    }

    fetchHighTemperature = () => {
        return Math.round(this.state.temp_high);
    }

    fetchLowTemperature = () => {
        return Math.round(this.state.temp_low);
    }

    fetchWeatherDescriptionSimple = () => {
        return this.state.cond2;
    }
    
    CurrentWeatherIMG = (cond2) => {
        if (cond2 == "Cloudy" || cond2 == "Clear") {
            return <Icon src = "../../assets/icons/cloudy2.png" width = '150'></Icon>
        } else if (cond2 == "Sunny") {
            return <Icon src = "../../assets/icons/sunny2.png" width = '150'></Icon>
        } else if (cond2 == "Raining") {
            return <Icon src = "../../assets/icons/rainy2.png" width = '150'></Icon>
        } else if (cond2 == "Windy") {
            return <Icon src = "../../assets/icons/windy2.png" width = '150'></Icon>
        } else {
            return <Icon src = "../../assets/icons/cloudy2.png" width = '150'></Icon>
        }
    }

    fetchLocation = () => {
        return this.state.locate;
    }

    render() {
        const Location = this.fetchLocation();
        const currentTemperature = this.fetchCurrentWeather();
        const weatherDescription = this.fetchWeatherDescription();
        const highTemperature = this.fetchHighTemperature();
        const lowTemperature = this.fetchLowTemperature();
        const weatherDescriptionSimple = this.fetchWeatherDescriptionSimple();
        return (
                <div id="currentWeatherComponent">
                    <div id='location' class={statsStyle.location}>
                        {Location}
                    </div>
                    <div class ={statsStyle.mediaBox}>
                        <div class ={statsStyle.tempBox}>
                            <div id='currentTemperature' class={statsStyle.currentTemperature}>
                                {currentTemperature}°
                            </div>

                            <div id='weatherDescription' class={statsStyle.weatherDescription}>
                                {weatherDescription}
                            </div>

                        </div>

                        <div class ={statsStyle.imgBox}>                             
                            <div id='CurrentWeatherIMG'>
                                {this.CurrentWeatherIMG(weatherDescriptionSimple)}
                            </div>
                            <div id='highLow' class={statsStyle.highLow}>
                                High: {highTemperature}° - Low: {lowTemperature}°
                            </div>
                        </div>
                    </div>
                </div>
          
        );
    }
}