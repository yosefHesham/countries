import fetchCountries from '../modules/fetchCountries.js';
import buildCountry from './country.js';

const renderCountries = async () => {
  const countryList = await fetchCountries('all');

  const countries = document.querySelector('.countries-section');
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

  countries.appendChild(temp);
};

export default renderCountries;
