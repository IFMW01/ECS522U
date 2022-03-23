// import preact
import { h, render, Component } from 'preact';
import './link_style_iphone.less'
export default class Link extends Component {

	// rendering a function when the button is clicked
	render() {
		let cimage = this.props.src; {/* Takes the image source from the user input*/}
        let link = this.props.href; {/* Takes the link source from the user input*/}
		return (
			<div>
				<a href ={link}><img src={cimage} width='50'></img> </a> 
            </div>
		);
	}
}
