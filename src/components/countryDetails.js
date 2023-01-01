import fetchCountries from '../modules/fetchCountries.js';

const renderCountryDetails = async () => {
  const name = localStorage.getItem('name');
  const countryResp = await fetchCountries(`name/${name}`);
  const countryData = countryResp[0];
  const countryDetails = document.querySelector('.details-main');

  const bordersTemp = document.createElement('div');

  countryData.borders.forEach((border) => {
    const borderTemp = document.createElement('p');
    borderTemp.classList.add('border-country');
    borderTemp.innerHTML = `${border}`;
    bordersTemp.appendChild(borderTemp);
  });

  countryDetails.innerHTML = `<img src=${
    countryData.flag
  } alt="name" class="country-details-image"  />
  <section class="country-wrapper"> 
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
    </section>
    <section class="domain">
    <p> Top Level Domain: <span> ${countryData.topLevelDomain[0]} </span> </p>
    <p> Currencies <span> ${countryData.currencies[0].name} </span> </p>
    <p> Languages: ${countryData.languages.map(
      (lang) => `<span> ${lang.name}    </span>`,
    )}   </p>
  
  </section>
   
   </section>
   <article class="borders">
        
   <p> Border Countries:  </p>

   ${bordersTemp.innerHTML}
   </article>   
 
   </section>
  `;
};

export default renderCountryDetails;
