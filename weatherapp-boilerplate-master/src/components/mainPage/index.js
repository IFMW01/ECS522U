// import preact
import { h, render, Component } from 'preact';

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


export default class MainPage extends Component {

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
                            <Activity  p = "Local Food" src = "../../assets/icons/food.png" href ='https://www.cntraveller.com/gallery/best-restaurants-londonb'></Activity>
                            <Activity  p = "Sight Seeing" src = "../../assets/icons/food.png" href ='https://www.cntraveller.com/gallery/best-restaurants-londonb'></Activity>
                            <Activity  p = "Culture" src = "../../assets/icons/culture.png" href ='https://www.cntraveller.com/gallery/best-restaurants-londonb'></Activity>
                            <Activity  p = "Drnking" src = "../../assets/icons/food.png" href ='https://www.cntraveller.com/gallery/best-restaurants-londonb'></Activity>
                        </div>
                    
                </div>
              

                <div class ={mainStyle.upComingTrips}>
                    <h5>Upcoming trips</h5>
                </div>
                    <Location src ="15th June - 25th June">London</Location>
                    <Location src ="30th June - 3rd July">Lisbon</Location>                
            </div>
		);
	}

	
}