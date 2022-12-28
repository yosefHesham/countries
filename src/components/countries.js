import fetchCountries from '../modules/fetchCountries.js';

const renderCountries = async () => {
  const countryList = await fetchCountries('all');

  const countries = document.querySelector('.countries-section');
  const temp = document.createElement('div');
  temp.innerHTML = `<div> ${countryList} </div>`;

  countries.appendChild(temp);
};

export default renderCountries;
