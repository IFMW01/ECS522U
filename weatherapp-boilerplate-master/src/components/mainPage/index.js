// import preact
import { h, render, Component } from 'preact';

import $, { event } from "jquery";

import React, { useEffect, useState } from "react";

import CurrentStats from '../currentStats';

import HourStats from '../hourStats';

import Button from '../button';

import Icon from '../icon'; //Imported

import Auth from '../auth'; //Imported 

import Link from '../link'; //Imported

import City from '../city'

import Iphone from '../iphone';

import style from '../iphone/style';

import mainStyle from './style.less';

import Location from '../location';

import Activity from '../activity';

import Navbar from '../navbar';


export default class MainPage extends Component {

    state = {
        location : ""
    }

    success = () => {
        document.getElementById("location").style.backgroundColor = rgb(160,247,167);
    }

    fail = () => {
        document.getElementById("location").style.backgroundColor = rgb(247,160,160);
    }

    // a call to fetch weather data via wunderground
	fetchWeatherData = (event) => {
		if (event.key === 'Enter') {
            // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
            var url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=metric&APPID=a973e9ecb5306d7f24b59a3677a25b3c`;
            $.ajax({
                url: url,
                dataType: "jsonp",
                success : this.success,
                error : this.fail
            })
        }
	}

    handleChange = (event) => {
        this.setState({
            location : event.target.value
        });
    }

    	// the main render method for the login component
	render() {
		return (
            <div class={ style.containerMainPage}>
                <div class ={mainStyle.profile}> 
                        <p>Israel's   profile<img src= "../../assets/icons/profilepic.png" width = '20'></img> </p>
                </div>
                <div class ={mainStyle.topSection}>
                        <div class = {mainStyle.locationBox}>
                    
                            <CurrentStats path='./currentStats' />
                            <HourStats path="./hourStats" />
                        </div>

                        <div class ={mainStyle.activityBar}>
                            <Activity  p = "Local Food" src = "https://img.icons8.com/emoji/48/000000/fork-and-knife-with-plate-emoji.png" href ='https://www.cntraveller.com/gallery/best-restaurants-london'></Activity>
                            <Activity  p = "Sight Seeing" src = "https://img.icons8.com/emoji/48/000000/eyes-emoji.png" href ='https://www.tripadvisor.co.uk/Attraction_Products-g186338-a_contentId.39583743001+677519730-London_England.html'></Activity>
                            <Activity  p = "Culture" src = "https://img.icons8.com/emoji/48/000000/artist-palette.png" href ='https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/gallery/best-art-galleries-in-london'></Activity>
                            <Activity  p = "Drinking" src = "https://img.icons8.com/emoji/48/000000/clinking-beer_mugs.png" href ='https://www.designmynight.com/london/whats-on/top-10-places-to-drink-in-london'></Activity>
                        </div>
                    
                </div>
              
                
                <div class ={mainStyle.upComingTrips}>
                        <div class={mainStyle.form}>
                            <h5>Upcoming trips</h5>
                        </div>
                        <div class={mainStyle.form}>
                            <input id="location" type="text" name="location" value={this.state.location} onKeyPress={this.fetchWeatherData} onChange={this.handleChange}></input>
                        </div>
                </div>
                    <Location src ="15th June - 25th June">Manchester</Location>
                    <Location src ="30th June - 3rd July">Lisbon</Location>  
                <Navbar></Navbar>              
            </div>
		);
	}

	
}