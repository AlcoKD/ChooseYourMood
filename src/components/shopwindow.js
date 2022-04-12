import React, {Component} from 'react';
import '../css/shopwindow.css';

class ShopWindow extends Component {

	constructor(){
		super();
		this.state = {
			cartCheck: 'empty'
		}
	}

	onCartCheck = (cartCheck) => {
		this.setState({cartCheck:cartCheck});
	}

	render(){
		return(

			<div id='sw-main-container'>
			{
				this.state.cartCheck === 'empty' ?
				<div>works</div> : 
				<div>cacca</div>
			}
			</div>
				
			);
	}
}

export default ShopWindow;