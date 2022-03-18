import { h, render, Component } from 'preact';
import React, { useState } from "preact";
import authstyle from './auth_style_iphone.less'

export default class Auth extends Component {

	// rendering a function when the button is clicked
	reroute(event){
		var userName = document.forms["login"]["uName"].value;
		var password = document.forms["login"]["PWD"].value;
		const passwordElement = document.getElementById("PWD");
		const uNameElement = document.getElementById("uName");
		console.log(password)
		if(userName =='' || password ==''){
			document.getElementById("invalid").style.display = 'block'
			uNameElement.style.backgroundColor = 'rgb(247, 160, 160)';
			passwordElement.style.backgroundColor = 'rgb(247, 160, 160)';
			
		}
		else if(userName=='israel' && password == '123456'){
			document.getElementById("invalid").style.display = 'none';
			document.getElementById("valid").style.display = 'block'

			passwordElement.style.backgroundColor = 'rgb(160, 247, 167)';
			uNameElement.style.backgroundColor = 'rgb(247, 160, 160)';
			setTimeout(() => { window.location.href='/loading'; }, 500);
			
			
		}
		else{
			document.getElementById("invalid").style.display = 'block';
			document.getElementById("PWD").style.backgroundColor = rgb(247,160,160);
			document.getElementById('uName').style.backgroundColor = rgb(247, 160, 160);
		}
		event.preventDefault();
	}
	render() {
		let cFunction = this.props.clickFunction;
        let form_style = this.props.form_class
		// {form.submit('/loading')}
		if(typeof cFunction !== 'function'){
			cFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
            <div>
				<form onsubmit={this.reroute} name = 'login'>
							<div id='invalid'class={authstyle.invalid}>
								<p>Invalid credentaials</p>
							</div>
							<div id='valid'class={authstyle.valid}>
								<p>Valid Credentaials</p>
							</div>
					<div class = {authstyle.authInput}>
							<input id= "uName" type ='text' placeholder='EXAMPLE@EMAIL.COM' name='uName'></input>
							<input  id= "PWD" type ='password' placeholder='PASSWORD' name ='PWD'></input>
					</div>
					<div class={authstyle.authSubmit}>
							<input type = 'submit'  value ='Login'/>
					</div>
				</form>
					
                
				<div class ={authstyle.createAcc}>
						<a>Create account?</a>
				</div>
            </div>

            
		
		);
	}
}