import fetchCountries from '../modules/fetchCountries.js';
import buildCountry from './country.js';

const countries = document.querySelector('.countries-section');
const renderCountries = async (segment = 'all') => {
  const countryList = await fetchCountries(segment);
  countries.innerHTML = '';
  const temp = document.createElement('div');
  if (countryList.message) {
    countries.innerHTML = '<p> No Search Results Found </p>';
    return;
  }
  countryList.forEach((country) => {
    temp.appendChild(
      buildCountry(
        country.name,
        country.population,
        country.region,
        country.capital,
        country.flag,
      ),
    );
  });

  countries.innerHTML += temp.innerHTML;
};

export default renderCountries;
