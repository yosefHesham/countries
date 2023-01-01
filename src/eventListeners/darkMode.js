const themeController = () => {
  const themeChanger = document.querySelector('.theme-mode');
  themeChanger.addEventListener('click', () => {
    const body = document.querySelector('body');
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      body.classList.add('white');
      localStorage.setItem('mode', 'white');
    } else {
      body.classList.add('dark');
      body.classList.remove('white');
      localStorage.setItem('mode', 'dark');
    }
  });
};

export default themeController;
