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

export default class MainPage extends Component {

    	// the main render method for the login component
	render() {

		return (
            <div>
                <div>
                    <CurrentStats path='./currentStats' />
                </div>
                <div>
                    <HourStats path="./hourStats" />
                </div>
            </div>
		);
	}

	
}