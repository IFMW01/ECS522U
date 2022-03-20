// import preact
import { h, render, Component } from 'preact';
import activityStyles from './activity_style.less';
export default class Activity extends Component {

	// rendering a function when the button is clicked
    //Adding a variable for the image src
    //TODO: Move styling to LESS
	render() {
		let cimage = this.props.src;
        let link = this.props.href;
        let desctription = this.props.p;
		return (
			<div class ={activityStyles.activity}>
                <p>{desctription}</p>
				<a href ={link}><img src={cimage} width='100'></img> </a>
            </div>
		);
	}
}