import React, { Component } from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/landingpage';
import Body from './components/body';
import Footer from './components/footer';
import ShopWindow from './components/shopwindow';
import SearchBar from './components/searchbar';
//images imports
import fp_cen from './img/fp-cen.jpg';
import fp_yel_sk from './img/fp-yel-sk.jpg';
import fp_yel_duo from './img/fp-yel-duo.jpg';


class App extends Component {

//fp_yel_sk link = /static/media/fp-yel-sk.b83da908bf5097a08eb7.jpg 
//fp_yel_duo link = /static/media/fp-yel-duo.a258c836dd4aa985f942.jpg
//fp_cen link = /static/media/fp-cen.28466fa1fdd069c75e55.jpg

componentDidMount() {

// MAKES THE LANDING PAGE IMAGES SWITCH EVERY X SECONDS
setInterval(()=> {
  function cycleReloadImg(){
  const imgStateLp = document.getElementById('img-state');
  console.log(imgStateLp.getAttribute('src'))
      if(imgStateLp.getAttribute('src') === '/ChooseYourMood/static/media/fp-yel-sk.b83da908bf5097a08eb7.jpg'){
        setTimeout(()=> {
          imgStateLp.setAttribute('src', fp_cen);
        },1000)
      }
      else if(imgStateLp.getAttribute('src') === '/ChooseYourMood/static/media/fp-cen.28466fa1fdd069c75e55.jpg'){
        setTimeout(()=> {
          imgStateLp.setAttribute('src', fp_yel_duo);
        },1000)
      }
      else if(imgStateLp.getAttribute('src') === '/ChooseYourMood/static/media/fp-yel-duo.a258c836dd4aa985f942.jpg'){
        setTimeout(()=> {
          imgStateLp.setAttribute('src', fp_yel_sk);
        },1000)
      }
      else {
        console.log(imgStateLp.getAttribute('src'))
      }   
    }cycleReloadImg();
  },3000)

//preRequisites for animationOnScrollFirstBodyTextContainer(); 
  const bodyTextContainer = document.querySelectorAll('.body-text-container');
  const scrollFirstBodyTextContainer = bodyTextContainer[0].offsetTop;
  const scrollSecondBodyTextContainer = bodyTextContainer[1].offsetTop;

bodyTextContainer[0].style.visibility = 'hidden';
bodyTextContainer[0].style.opacity = '0';

bodyTextContainer[1].style.visibility = 'hidden';
bodyTextContainer[1].style.opacity = '0';

// ADD FIXED POSTION TO THE SECOND GRID SECTION OF THE NAVBAR ONLY IF THE PAGE IS SCROLLED OUT OF ITS VIEW
window.onscroll = () => {
addFixedClass();
animationOnScrollFirstBodyTextContainer();
animationOnScrollSecondBodyTextContainer();
}
  const navbarSecondGridSection = document.getElementById('nb-second-grid-section');
  const sticky = navbarSecondGridSection.offsetTop;

  function addFixedClass() {
    if (window.pageYOffset >= sticky) {
      navbarSecondGridSection.classList.add('fixed-top');
    } 
    else {
      navbarSecondGridSection.classList.remove('fixed-top');
    }
  }
//Make the text of the body appear when scrolledIntoView
    function animationOnScrollFirstBodyTextContainer() {
      if (window.pageYOffset >= scrollFirstBodyTextContainer-1000) {
        bodyTextContainer[0].classList.add('animationFromRightClass')
        bodyTextContainer[0].style.visibility = 'visible';
        bodyTextContainer[0].style.opacity = '1';
      }
      else {
        return;
    }
  }

    function animationOnScrollSecondBodyTextContainer() {
      if (window.pageYOffset >= scrollSecondBodyTextContainer-1000) {
        bodyTextContainer[1].classList.add('animationFromLeftClass')
        bodyTextContainer[1].style.visibility = 'visible';
        bodyTextContainer[1].style.opacity = '1';
      }
      else {
        return;
    }
  }
// CART SHOP SHOW AND DISCARD
  const mainCartIcon = document.getElementById('cart-icon');
  const shopWindowContainer = document.getElementById('sw-main-container');
  mainCartIcon.addEventListener('click', showShopWindow);
  shopWindowContainer.addEventListener('mouseleave', discardShopWindow);

  function showShopWindow(){
    shopWindowContainer.style.display = 'flex';
  }

  function discardShopWindow(){
    shopWindowContainer.style.display = 'none';
  }
//SEARCH ICON SHOW AND DISCARD
  const mainSearchIcon = document.getElementById('search-icon');
  const searchBarContainer = document.getElementById('sb-main-container');
  const xSbIcon = document.getElementById('sb-X-icon');
  mainSearchIcon.addEventListener('click', showSearchBar);
  xSbIcon.addEventListener('click', discardSearchBar);

  function showSearchBar(){
    searchBarContainer.style.display = 'flex';
  }

  function discardSearchBar(){
    searchBarContainer.style.display = 'none';
  }
}

  render(){
    return(

      <div id='app-main-container'>
        <Navbar />
          <LandingPage/>
            <Body />
              <Footer />
                <ShopWindow />
                  <SearchBar />
      </div>

      );
  }
}


export default App;
