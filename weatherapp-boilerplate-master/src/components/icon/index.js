// import preact
import { h, render, Component } from 'preact';
	
export default class Icon extends Component {

	// rendering a function when the button is clicked
    //Adding a variable for the image src
    //TODO: Move styling to LESS
	render() {
		let cimage = this.props.src; {/* Takes the image source from the user input*/}
        let cdescription = this.props.children; {/* Takes the description from the user input*/}
		let cwidth = this.props.width;
		return (
			<div>
				<img src={cimage} width={cwidth}></img>  {/* Uses the assigned variable values passed as compoenent parameters*/}
                <h1>{cdescription}</h1>
            </div>
		);
	}
}
