  const menuToggle = document.querySelector('.menu-toggle');
  const headerOptions = document.querySelector('.header-options');

  menuToggle.addEventListener('click', () => {
    headerOptions.classList.toggle('active');
  });

