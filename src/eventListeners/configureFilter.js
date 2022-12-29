import renderCountries from '../components/countries.js';

const configureFilter = () => {
  const selectFilter = document.querySelector('.select-filter');
  selectFilter.addEventListener('change', (e) => {
    renderCountries(`region/${e.target.value}`);
  });
};

export default configureFilter;
