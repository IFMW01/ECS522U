import { h, render, Component } from 'preact';

import Icon from '../icon';

import statsStyle from './style.less'

export default class HourStats extends Component {

    

    fetchHourlyTemps = () => {
        return [19, 20, 22, 18];
    }
    
    HourlyWeatherIMG = (currentTemp) => {
        if (currentTemp > 16) {
            return <Icon src = "../../assets/icons/sunny2.png" width = '50'></Icon>
        } else {
            return <Icon src = "../../assets/icons/cloudy2.png" width = '50'></Icon>
        }
    }

    render() {
        const temp1 = this.fetchHourlyTemps()[0];
        const temp2 = this.fetchHourlyTemps()[1];
        const temp3 = this.fetchHourlyTemps()[2];
        const temp4 = this.fetchHourlyTemps()[3];
        return (
            <div id='hourlyStats' class={statsStyle.hourlyStats}>
                <div id="temp1" class={statsStyle.temp1}>
                    <div id="temp1val" class={statsStyle.temp1val}>
                        {temp1}°
                    </div>
                    {this.HourlyWeatherIMG(temp1)}
                </div>
                <div id="temp2" class={statsStyle.temp2}>
                    <div id="temp2val" class={statsStyle.temp2val}>
                        {temp2}°
                    </div>
                    {this.HourlyWeatherIMG(temp2)}
                </div>
                <div id="temp3" class={statsStyle.temp3}>
                    <div id="temp3val" class={statsStyle.temp3val}>
                        {temp3}°
                    </div>
                    {this.HourlyWeatherIMG(temp3)}
                </div>
                <div id="temp4" class={statsStyle.temp4}>
                    <div id="temp4val" class={statsStyle.temp4val}>
                        {temp4}°
                    </div>
                    {this.HourlyWeatherIMG(temp4)}
                </div>
            </div>
            
        );
    }
}