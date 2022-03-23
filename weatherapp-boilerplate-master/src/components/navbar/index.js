// import preact
import { h, render, Component } from 'preact';
import React, { useEffect, useState } from "react";
// import jquery for API calls
import $ from 'jquery';

import Link from '../link'; //Imported

import navStyle from './style.navbar.less';

export default class Navbar extends Component {
    	// the main render method for the main
	render() {
		return (
			<div>
				<div class = {navStyle.bar}>
					<div class = {navStyle.icon}>
						<Link src = "../../assets/icons/home.png" href =''></Link>
					</div>
					<div class = {navStyle.icon}>
						<Link src = "../../assets/icons/clipboard.png" href =''></Link>
					</div>
					<div class = {navStyle.icon}>
						<Link src = "../../assets/icons/map.png" href =''></Link>
					</div>
					<div class = {navStyle.icon}>
						<Link src = "../../assets/icons/setting.png" href =''></Link>
					</div>
				</div>
			</div>
		);
	}

	
}