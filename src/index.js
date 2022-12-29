import renderCountries from './components/countries.js';
import configureFilter from './eventListeners/configureFilter.js';
import configureSearch from './eventListeners/configureSearch.js';
import './style.css';

function onRender() {
  renderCountries();
  configureFilter();
  configureSearch();
}
window.onload = onRender();
