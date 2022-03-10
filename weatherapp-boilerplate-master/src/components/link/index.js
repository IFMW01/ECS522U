// import preact
import { h, render, Component } from 'preact';
import './link_style_iphone.less'
export default class Link extends Component {

	// rendering a function when the button is clicked
    //Adding a variable for the image src
    //TODO: Move styling to LESS
	render() {
		let cimage = this.props.src;
        let link = this.props.href;
		return (
			<div>
				<a href ={link}><img src={cimage} width='50'></img> </a>
            </div>
		);
	}
}
