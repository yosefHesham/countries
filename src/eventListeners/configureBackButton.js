const configureBackButton = () => {
  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
    window.history.back();
  });
};

export default configureBackButton;
