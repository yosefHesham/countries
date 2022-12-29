import renderCountries from '../components/countries.js';
import configureCountry from './configureCountry.js';

const configureSearch = () => {
  const form = document.querySelector('.search-bar');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = form.elements.searchValue.value;
    if (searchValue) {
      renderCountries(`name/${searchValue}`);
      configureCountry();
    }
  });
  form.elements.searchValue.addEventListener('input', (e) => {
    if (!e.target.value) {
      renderCountries();
      configureCountry();
    }
  });
};

export default configureSearch;
