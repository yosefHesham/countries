import renderCountries from './components/countries.js';
import configureCountry from './eventListeners/configureCountry.js';
import configureFilter from './eventListeners/configureFilter.js';
import configureSearch from './eventListeners/configureSearch.js';
import './style.css';

async function onRender() {
  await renderCountries();
  configureFilter();
  configureSearch();
  configureCountry();
}

window.onload = onRender();
