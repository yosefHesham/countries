import renderCountries from '../components/countries';

const configureSearch = () => {
  const form = document.querySelector('.search-bar');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = form.elements.searchValue.value;
    if (searchValue) {
      renderCountries(`name/${searchValue}`);
    }
  });
  form.elements.searchValue.addEventListener('input', (e) => {
    if (!e.target.value) {
      renderCountries();
    }
  });
};

export default configureSearch;
