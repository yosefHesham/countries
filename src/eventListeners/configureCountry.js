const configureCountry = () => {
  const countries = document.querySelectorAll('.country');
  countries.forEach((country) => {
    country.addEventListener('click', (e) => {
      //   const { name } = e.currentTarget.dataset;
      window.location.href = './details.html ';
      //   window.history.pushState(name, '', '/countryDetailsPage.html');
    });
  });
};

export default configureCountry;
