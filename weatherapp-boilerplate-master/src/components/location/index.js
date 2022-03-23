// import preact
import { h, render, Component } from 'preact';
import React, { useEffect, useState } from "react";
// import jquery for API calls
import $ from 'jquery';

import Button from '../button';

import Icon from '../icon'; //Imported

import Auth from '../auth'; //Imported 

import Link from '../link'; //Imported

import Iphone from '../iphone';

import style from '../iphone/style';

import locationStyle from './style.location.less';

export default class Location extends Component {

	state = {
        locate : "",
        temp : "",
        icon : ""
    }

    componentDidMount() { /* Using the API call to get the name, temperature and wather Icon from the call */
		let location = this.props.children
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=a973e9ecb5306d7f24b59a3677a25b3c&units=metric`) 
        .then(response => response.json())
        .then(
            (data) => {
                this.setState({
                    locate : data['name'],
                    temp : data['main']['temp'],
                    icon : data['weather']['0']['icon']
                });
        })

        this.setState({
			locate : location,
			temp : temperature,
			icon : icon
		}); 
    }

    fetchCurrentWeather = () => {
        return Math.round(this.state.temp);
    }

	fetchIcon = () => {
		return this.state.icon;
	}

    	// the main render method for the main
	render() {
        const temp = this.fetchCurrentWeather();
        const icon = this.fetchIcon();
		let location = this.props.children /* Takes location from compoenent parameter */
		let date = this.props.src /* Takes dates from compoenent parameter */
		return (
				<div class={locationStyle.location}>
					<div class={locationStyle.left}>
						<div class={locationStyle.city}>
							<p>{location}</p>
						</div>
						<div class={locationStyle.date}>
							<p>{date}</p>
						</div>
					</div>
					<div class={locationStyle.right}>
						<div class={locationStyle.temp}>
							<p>{temp}°C</p> {/* Using the temp variable to insert the temperature */}
						</div>
						<div class={locationStyle.icon}>
							<img src={"http://openweathermap.org/img/wn/" + icon + ".png"}></img> {/* Getting the Icon from an online server provided by the API */}
						</div>
					</div>
				</div>
		);
	}

	
}