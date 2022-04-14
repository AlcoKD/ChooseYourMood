import '../css/searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
	return(


		<div id='sb-main-container'>
			<div id='sb-re-container'>
				<FontAwesomeIcon icon={faMagnifyingGlass} id='sb-search-icon'/>
				<input type='search' id='sb-product-search' name='products' />
				<FontAwesomeIcon icon={faX} id='sb-X-icon' />
			</div>
		</div>

		);
}

export default SearchBar;