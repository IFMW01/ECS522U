// import preact
import { h, render, Component } from 'preact';
	
export default class Button extends Component {

	// rendering a function when the button is clicked
    //Adding a variable for the image src
    //TODO: Move styling to LESS
	render() {
		let cimage = this.props.src;
        let description = this.props.children;
		return (
			<div>
				<img src={cimage} width='50'></img> 
                <h1>{description}</h1>
            </div>
		);
	}
}
