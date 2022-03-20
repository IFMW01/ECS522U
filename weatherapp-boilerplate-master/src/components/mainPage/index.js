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

export default class MainPage extends Component {

    	// the main render method for the login component
	render() {

		return (
            <div class={ style.container }>
                <div class = {mainStyle.locationBox}>
            
                        <CurrentStats path='./currentStats' />
                        <HourStats path="./hourStats" />
                

                </div>
                
            </div>
		);
	}

	
}