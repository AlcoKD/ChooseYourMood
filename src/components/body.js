import '../css/body.css';
import fp_duo_sc from '../img/fp-duo-sc.jpeg';
import fp_duo from '../img/fp-duo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Body = () => {
	return(
		<div id='body-main-container'>
			<div className='body-items-container'>
				
				<div className='body-text-container'>
					<div className='body-top-section'><h3 className='text-color-green'>Discover Our Products</h3></div>
					<div className='body-h2-text-container'><h2>FASHION</h2></div>
					<div className='body-h1-text-container'><h1>SALE</h1></div>
					<div className='body-p-text-container'><p>Find out what's new in our store and our exclusive sales on the most liked products on every social!</p></div>
					<div className='body-button-container'><a href='#' id='body-button'>SHOP NOW</a></div>
						<div className='body-icons-container'>
							<FontAwesomeIcon icon={faFacebook} className='body-icon' />
							<FontAwesomeIcon icon={faInstagram} className='body-icon' />
							<FontAwesomeIcon icon={faTwitter} className='body-icon' />
						</div>
					</div>
						<div className='body-image-container'><img src={fp_duo_sc} alt='fashion girls' className='body-image'/></div>
					<div>	
				</div>
			</div>

			<div className='body-items-container' id='reverse-row'>
				
				<div className='body-text-container'>
					<div className='body-top-section flex-end'><h3 className='text-color-green'>Newest Limited Edition!</h3></div>
					<div className='body-h2-text-container flex-end'><h2>SPRING</h2></div>
					<div className='body-h1-text-container flex-end'><h1>SALE</h1></div>
					<div className='body-p-text-container flex-end'><p>Find out what's new in our store and our exclusive sales on the most liked products on every social!</p></div>
					<div className='body-button-container flex-end'><a href='#' id='body-button'>SHOP NOW</a></div>
						<div className='body-icons-container flex-end'>
							<FontAwesomeIcon icon={faFacebook} className='body-icon'/>
							<FontAwesomeIcon icon={faInstagram} className='body-icon'/>
							<FontAwesomeIcon icon={faTwitter} className='body-icon'/>
						</div>
					</div>
						<div className='body-image-container'><img src={fp_duo} alt='fashion girls' className='body-image'/></div>
					<div>	
				</div>
			</div>

			<div id='body-end-container'><h4>~ La mode se dèmode, le style jamais ~</h4></div>
		</div>
		);
}

export default Body;