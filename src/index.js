import renderCountries from './components/countries.js';
import renderCountryDetails from './components/countryDetails.js';
import configureFilter from './eventListeners/configureFilter.js';
import configureSearch from './eventListeners/configureSearch.js';
import themeController from './eventListeners/darkMode.js';
import './style.css';

async function onRender() {
  if (window.location.pathname === '/') {
    await renderCountries();
    configureFilter();
    configureSearch();
  } else {
    renderCountryDetails();
  }
  themeController();
  if (localStorage.getItem('mode')) {
    const body = document.querySelector('body');
    body.classList.add(localStorage.getItem('mode'));
  }
}

window.onload = onRender();
