import { h, render, Component } from 'preact';
import './auth_style_iphone.less'

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
            <div style = 'padding-left: 20px; padding-right:20px;'>
                <form>
                    <input type ='text' placeholder='EXAMPLE@EMAIL.COM'></input>
                    <input type ='password' placeholder='PASSWORD'></input>
                    <input type = 'submit' value='Login'></input>
                </form>
            </div>

            
		
		);
	}
}