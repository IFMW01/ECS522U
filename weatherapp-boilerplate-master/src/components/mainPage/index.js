// import preact
import { h, render, Component } from 'preact';

import $ from "jquery";

import React from "react";

import CurrentStats from '../currentStats'; //Imported component

import HourStats from '../hourStats'; //Imported component

import Location from '../location'; //Imported component

import Activity from '../activity'; //Imported component

import Navbar from '../navbar'; //Imported component

import style from '../iphone/style'; //Imported component stylesheet

import mainStyle from './style.less'; //Imported component stylesheet


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


    	// the main render method for the rendering of the main page 

	render() {
		return (
            <div class={ style.containerMainPage}>
                <div class ={mainStyle.profile}> 
                        <p>Israel's   profile<img src= "../../assets/icons/profilepic.png" width = '20'></img> </p>
                </div>
                <div class ={mainStyle.topSection}>
                        <div class = {mainStyle.locationBox}>
                    
                            <CurrentStats path='./currentStats' />  {/* Using the current stats component*/}
                            <HourStats path="./hourStats" /> {/* Using the Hour stats component*/}
                        </div>

                        <div class ={mainStyle.activityBar}>
                            <Activity  p = "Local Food" src = "https://img.icons8.com/emoji/48/000000/fork-and-knife-with-plate-emoji.png" href ='https://www.cntraveller.com/gallery/best-restaurants-london'></Activity>  {/* Using the Activity component*/}
                            <Activity  p = "Sight Seeing" src = "https://img.icons8.com/emoji/48/000000/eyes-emoji.png" href ='https://www.tripadvisor.co.uk/Attraction_Products-g186338-a_contentId.39583743001+677519730-London_England.html'></Activity> {/* Using the Activity component */}
                            <Activity  p = "Culture" src = "https://img.icons8.com/emoji/48/000000/artist-palette.png" href ='https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/gallery/best-art-galleries-in-london'></Activity> {/* Using the Activity component */}
                            <Activity  p = "Drinking" src = "https://img.icons8.com/emoji/48/000000/clinking-beer_mugs.png" href ='https://www.designmynight.com/london/whats-on/top-10-places-to-drink-in-london'></Activity> {/* Using the Activity component */}
                        </div>
                    
                </div>
              
                
                <div class ={mainStyle.upComingTrips}>
                        <div class={mainStyle.form}>
                            <h5>Upcoming trips</h5>
                        </div>
                </div>
                    <Location src ="15th June - 25th June">Manchester</Location> {/* Using the Location component that utilises an API call*/}
                    <Location src ="30th June - 3rd July">Lisbon</Location>   {/* Using the Location component that utilises an API call*/}
                <Navbar></Navbar>   {/* Using the NavBar*/}         
            </div>
		);
	}

	
}