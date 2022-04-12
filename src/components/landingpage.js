
import '../css/landingpage.css';

import fp_yel_sk from '../img/fp-yel-sk.jpg';


const LandingPage = () => {

	return(

		<div id='lp-main-container'>
			
			<div id='lp-slide-container'>

				<img src={fp_yel_sk} alt='collection-woman' className='lp-img' id='img-state'
				/>
				<div id='absolute-lp'>
					<div id='shop-link-container'>
						<div className='full'><h3 id='shop-text'>Woman Edition</h3></div>
						<div className='full'><a href='#' id='shop-button'>Shop</a></div>
					</div>
				</div>
			</div>

		</div>

		);
	
}

export default LandingPage;