import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faCartShopping, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.jpeg';
const Navbar = () => {
	return(

		<div id='nb-main-container'>

			<div id='nb-first-grid-section'>
				<div id='nb-logo-container'><img src={logo} alt='logo' id='logo'/></div>
				<div id='nb-header-container'><header><h1 id='title'>Choose Your Mood</h1></header></div>
				<div id='nb-icons-container'>
				<FontAwesomeIcon icon={faMagnifyingGlass} className='nb-fai-icons'/>
				<FontAwesomeIcon icon={faUser} className='nb-fai-icons'/>
				<FontAwesomeIcon icon={faCartShopping} className='nb-fai-icons'/>
				</div>
			</div>

			<div id='nb-second-grid-section'>
				<ul id='nb-ul'>
					<li className='nb-list-item'>Uomo<FontAwesomeIcon icon={faAngleDown} className='nb-list-angle-icon'/></li>
					<li className='nb-list-item'>Donna<FontAwesomeIcon icon={faAngleDown} className='nb-list-angle-icon' /></li>
					<li className='nb-list-item'>Limited Edition</li>
					<li className='nb-list-item'>Saldi</li>
				</ul>
			</div>

		</div>

		);
}

export default Navbar;