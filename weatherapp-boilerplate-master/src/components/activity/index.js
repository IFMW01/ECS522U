// import preact
import { h, render, Component } from 'preact';
import activityStyles from './activity_style.less';
export default class Activity extends Component {

	render() {
		let cimage = this.props.src; {/* Takes the image source from the user input*/}
        let link = this.props.href; {/* Takes the link source from the user input*/}
        let desctription = this.props.p; {/* Takes the desription from the user input*/}
		return (
			<div class ={activityStyles.activity}>
                     <div class={activityStyles.image}> 
                        <img src={cimage} width='25'> </img> {/* Using Cimage variable*/}
                    </div>
                    <div class={activityStyles.link} >
                        <a href ={link}><p>{desctription}</p> </a> {/* Takes link and descritpion varaibles*/}
                    </div>
                
                    
            </div>
		);
	}
}