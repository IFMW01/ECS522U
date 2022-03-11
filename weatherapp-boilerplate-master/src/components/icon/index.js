// import preact
import { h, render, Component } from 'preact';
	
export default class Button extends Component {

	// rendering a function when the button is clicked
    //Adding a variable for the image src
    //TODO: Move styling to LESS
	render() {
		let cimage = this.props.src;
        let cdescription = this.props.children;
		let cwidth = this.props.width;
		return (
			<div>
				<img src={cimage} width={cwidth}></img> 
                <h1>{cdescription}</h1>
            </div>
		);
	}
}
