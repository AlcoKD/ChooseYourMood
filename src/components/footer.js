import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from'@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return(


		<div id='footer-main-container'>
			<div><h5 className='footer-h5'>Follow us on our socials</h5></div>
				<div id='footer-icons-container'>
					<FontAwesomeIcon icon={faFacebook} className='footer-icons' />
					<FontAwesomeIcon icon={faInstagram} className='footer-icons' />
					<FontAwesomeIcon icon={faTwitter} className='footer-icons' />
				</div>
			<div>
				<h5 className='footer-h5'>Take a minute to subscribe to our newsletter and get a 15% coupon</h5>
			</div>
			<div>
				<FontAwesomeIcon icon={faEnvelope} className='footer-icons' />
			</div>

			<div id='footer-end'><p>© Copyright 2022 Choose Your Mood. All Rights Reserved | Via salvator dalì 24 - 80126 Napoli (Na)</p></div>
		</div>

		);
}

export default Footer;