import fetchCountries from '../modules/fetchCountries.js';
import buildCountry from './country.js';

const renderCountries = async (segment = 'all') => {
  const countryList = await fetchCountries(segment);
  const countries = document.querySelector('.countries-section');
  countries.innerHTML = '';
  const temp = document.createElement('div');
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
