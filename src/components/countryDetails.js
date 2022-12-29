import fetchCountries from '../modules/fetchCountries.js';

const renderCountryDetails = async () => {
  const name = localStorage.getItem('name');
  const countryResp = await fetchCountries(`name/${name}`);
  const countryData = countryResp[0];
  console.log(countryData);
  const countryDetails = document.querySelector('.details-main');

  const bordersTemp = document.createElement('div');

  countryData.borders.forEach((border) => {
    const borderTemp = document.createElement('p');
    borderTemp.innerHTML = `${border}`;
    bordersTemp.appendChild(borderTemp);
  });

  countryDetails.innerHTML = `<img src=${countryData.flag} alt="name" class="country-details-image"  />
  
  
  <section class="country-info-wrapper">
    <section class="country-info"> 
    <h2> ${countryData.name} </h2>
        <article> 
            <p> Native Name : <span> ${countryData.nativeName} </span> </p>
            <p> Population : <span> ${countryData.population} </span> </p>
            <p> Region : <span> ${countryData.region} </span> </p>
            <p> Sub Region : <span> ${countryData.subregion} </span> </p>
            <p> Capital : <span> ${countryData.capital} </span> </p>

         </article>

        <article class="borders">
        
        <p> Border Countries:  </p>
    
        ${bordersTemp.innerHTML}
        </article> 
    </section>
   </section>
  `;
};

export default renderCountryDetails;
