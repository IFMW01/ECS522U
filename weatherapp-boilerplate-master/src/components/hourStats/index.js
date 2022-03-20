import { h, render, Component } from 'preact';

import Icon from '../icon';

import statsStyle from './style.less'

import style from '../iphone/style';

export default class HourStats extends Component {

    

    fetchHourlyTemps = () => {
        return [19, 20, 22, 18];
    }
    
    HourlyWeatherIMG = (currentTemp) => {
        if (currentTemp > 16) {
            return <Icon src = "../../assets/icons/sunny2.png" width = '45'></Icon>
        } else {
            return <Icon src = "../../assets/icons/cloudy2.png" width = '45'></Icon>
        }
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
                            {this.HourlyWeatherIMG(temp1)}
                        </div>
                        <div id="temp2" class={statsStyle.hourlyTemp}>
                            <div id="temp2val" class={statsStyle.hourlyTempText}>
                                {temp2}°
                            </div>
                            {this.HourlyWeatherIMG(temp2)}
                        </div>
                        <div id="temp3" class={statsStyle.hourlyTemp}>
                            <div id="temp3val"class={statsStyle.hourlyTempText}>
                                {temp3}°
                            </div>
                            {this.HourlyWeatherIMG(temp3)}
                        </div>
                        <div id="temp4" class={statsStyle.hourlyTemp2}>
                            <div id="temp4val"class={statsStyle.hourlyTempText}>
                                {temp4}°
                            </div>
                            {this.HourlyWeatherIMG(temp4)}
                        </div>
                 
                    </div>    

        );
    }
}