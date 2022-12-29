const configureCountry = () => {
  const countries = document.querySelectorAll('.country');
  countries.forEach((country) => {
    country.addEventListener('click', (e) => {
      const { name } = e.currentTarget.dataset;
      localStorage.setItem('name', name);
      window.location.href = 'details.html';
    });
  });
};

export default configureCountry;
