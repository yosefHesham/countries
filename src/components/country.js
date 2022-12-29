const buildCountry = (name, population, region, capital, flag) => {
  const country = document.createElement('article');
  country.classList.add('country');
  country.dataset.name = name;
  country.innerHTML = `<img src=${flag} alt="name" class="country-image"/>
  <section class="country-info"> 
    <h2> ${name} </h2>
    <p> Population: <span> ${population} </span> </p>
    <p> Region: <span> ${region} </span> </p>
    <p> Capital:  <span> ${capital} </span> </p>
    </section>
  `;

  return country;
};

export default buildCountry;
