import '../css/emptyshop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const EmptyShop = () => {
	return(


		<div id='es-main-container'>

			<div id='es-top-icon-container'>
				<FontAwesomeIcon icon={faCartShopping} id='es-icon-size'/>
				<p id='es-p-text-top'>Choose Your Mood</p>
			</div>

			<div id='es-center-container'>
				<p id='es-p-text'>Your cart is still empty.</p>
				<p id='es-p-text'>Choose your first product in our<a href='#' id='es-shop-button'> Shop</a></p>
			</div>
		</div>

		);
}

export default EmptyShop;