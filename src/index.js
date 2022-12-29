import renderCountries from './components/countries.js';
import configureFilter from './eventListeners/configureFilter.js';
import './style.css';

function onRender() {
  renderCountries();
  configureFilter();
}
window.onload = onRender();
