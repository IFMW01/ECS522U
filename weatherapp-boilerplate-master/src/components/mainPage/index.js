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
                            <Activity  p = "Local Food" src = "https://img.icons8.com/emoji/48/000000/fork-and-knife-with-plate-emoji.png" href ='https://www.cntraveller.com/gallery/best-restaurants-london'></Activity>
                            <Activity  p = "Sight Seeing" src = "https://img.icons8.com/emoji/48/000000/eyes-emoji.png" href ='https://www.tripadvisor.co.uk/Attraction_Products-g186338-a_contentId.39583743001+677519730-London_England.html'></Activity>
                            <Activity  p = "Culture" src = "https://img.icons8.com/emoji/48/000000/artist-palette.png" href ='https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/gallery/best-art-galleries-in-london'></Activity>
                            <Activity  p = "Drinking" src = "https://img.icons8.com/emoji/48/000000/clinking-beer_mugs.png" href ='https://www.designmynight.com/london/whats-on/top-10-places-to-drink-in-london'></Activity>
                        </div>
                    
                </div>
              

                <div class ={mainStyle.upComingTrips}>
                    <h5>Upcoming trips</h5>
                </div>
                    <Location src ="15th June - 25th June">Manchester</Location>
                    <Location src ="30th June - 3rd July">Lisbon</Location>   

                <div class ={mainStyle.bottomNav}> 
                       <br></br>
                       <br></br>
             
                </div>             
            </div>
		);
	}

	
}