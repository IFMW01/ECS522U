import { h, render, Component } from 'preact';

import Icon from '../icon';

import statsStyle from './style.less'

import style from '../iphone/style';

export default class HourStats extends Component {

    state = {
        temp : "",
        cond : ""
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a973e9ecb5306d7f24b59a3677a25b3c&units=metric')
        .then(response => response.json())
        .then(
            (data) => {
                this.setState({
                    temp : data['main']['temp'],
                    cond : data['weather']['0']['description']
                });
        })

        this.setState({
			temp : temperature,
            cond : conditions

		}); 
    }

    fetchHourlyTemps = () => {
        var today = new Date();
        var time = today.getHours();
        if (time > 18) {
            return [Math.round(this.state.temp), Math.round(this.state.temp) - 2, Math.round(this.state.temp) - 3, Math.round(this.state.temp) - 3];    
        } else {
            return [Math.round(this.state.temp), Math.round(this.state.temp) + 1, Math.round(this.state.temp) + 2, Math.round(this.state.temp) + 2];
        }
    }
    
    HourlyWeatherIMG = (cond2) => {
        if (cond2 == "Cloudy" || cond2 == "Clear") {
            return <Icon src = "../../assets/icons/cloudy2.png" width = '45'></Icon>
        } else if (cond2 == "Sunny") {
            return <Icon src = "../../assets/icons/sunny2.png" width = '45'></Icon>
        } else if (cond2 == "Raining") {
            return <Icon src = "../../assets/icons/rainy2.png" width = '45'></Icon>
        } else if (cond2 == "Windy") {
            return <Icon src = "../../assets/icons/windy2.png" width = '45'></Icon>
        } else {
            return <Icon src = "../../assets/icons/cloudy2.png" width = '45'></Icon>
        }
    }

    fetchCurrentTime = (t) => {
        var today = new Date();
        var time = today.getHours() + t;
        if (time > 23) {
            time = time - 24;
        }
        return time;
    }

    render() {
        const temp1 = this.fetchHourlyTemps()[0];
        const temp2 = this.fetchHourlyTemps()[1];
        const temp3 = this.fetchHourlyTemps()[2];
        const temp4 = this.fetchHourlyTemps()[3];
        return (
            <div id='hourlyStats' class={ statsStyle.mediaBox}>
                <div id="temp1" class={statsStyle.hourlyTemp1}>
                    <div id="temp1val" class={statsStyle.hourlyTempText}>
                        {temp1}°
                    </div>
                    <div id="time" class={statsStyle.time}>
                        {this.fetchCurrentTime(1)}:00
                    </div>
                    {this.HourlyWeatherIMG(temp1)}
                </div>
                <div id="temp2" class={statsStyle.hourlyTemp}>
                    <div id="temp2val" class={statsStyle.hourlyTempText}>
                        {temp2}°
                    </div>
                    <div id="time" class={statsStyle.time}>
                        {this.fetchCurrentTime(2)}:00
                    </div>
                    {this.HourlyWeatherIMG(temp2)}
                </div>
                <div id="temp3" class={statsStyle.hourlyTemp}>
                    <div id="temp3val"class={statsStyle.hourlyTempText}>
                        {temp3}°
                    </div>
                    <div id="time" class={statsStyle.time}>
                        {this.fetchCurrentTime(3)}:00
                    </div>
                    {this.HourlyWeatherIMG(temp3)}
                </div>
                <div id="temp4" class={statsStyle.hourlyTemp2}>
                    <div id="temp4val"class={statsStyle.hourlyTempText}>
                        {temp4}°
                    </div>
                    <div id="time" class={statsStyle.time}>
                        {this.fetchCurrentTime(4)}:00
                    </div>
                    {this.HourlyWeatherIMG(temp4)}
                </div>
            </div>    
            
        );
    }
}