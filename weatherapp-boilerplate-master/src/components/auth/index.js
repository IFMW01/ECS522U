import { h, render, Component } from 'preact';
import authstyle from './auth_style_iphone.less'

export default class Auth extends Component {

	// rendering a function when the button is clicked
	render() {
		let cFunction = this.props.clickFunction;
        let form_style = this.props.form_class

		if(typeof cFunction !== 'function'){
			cFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
            <div>
                <form>
					<div class = {authstyle.authInput}>
						<input type ='text' placeholder='EXAMPLE@EMAIL.COM'></input>
						<input type ='password' placeholder='PASSWORD'></input>
					</div>
                   <div class={authstyle.authSubmit}>
				   		<input type = 'submit' value='Login'></input>
					</div>
                </form>
				<div class ={authstyle.createAcc}>
						<a>Create account?</a>
				</div>
            </div>

            
		
		);
	}
}