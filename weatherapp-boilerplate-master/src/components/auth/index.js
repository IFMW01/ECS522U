import { h, render, Component } from 'preact';
import authstyle from './auth_style_iphone.less'

export default class Auth extends Component {

	// rendering a function when the button is clicked
	reroute(event){
		window.location.href='/loading';
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
				<form onsubmit={this.reroute}>
					<div class = {authstyle.authInput}>
							<input type ='text' placeholder='EXAMPLE@EMAIL.COM'></input>
							<input type ='password' placeholder='PASSWORD'></input>
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