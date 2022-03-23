import { h, render, Component } from 'preact';
import React, { useState } from "preact";
import authstyle from './auth_style_iphone.less'

export default class Auth extends Component {

	// rendering a function when the button is clicked
	reroute(event){
		var userName = document.forms["login"]["uName"].value;  /* Setting userName varaibles from html input by user */
		var password = document.forms["login"]["PWD"].value; /* Setting the password varaibles from html input by user */
		const passwordElement = document.getElementById("PWD");
		const uNameElement = document.getElementById("uName");
		console.log(password)
		if(userName =='' || password ==''){ /* If password and user name values are left empty */
			document.getElementById("invalid").style.display = 'block' /* Display invalid credentials notif */			
		}
		else if(userName=='israel' && password == '123456'){ /* If valid credentails are inputted*/
			document.getElementById("invalid").style.display = 'none'; 
			document.getElementById("valid").style.display = 'block'  /* Display valid box */
			setTimeout(() => { window.location.href='/loading'; }, 500);  /* Route to the loading page */			
			
		}
		else{  /* Invalid credentails inpuuted */
			document.getElementById("invalid").style.display = 'block';  /* Display invlaid notification */
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