function showMenu() {
  const nav = document.querySelector('.header');
  const menu = document.querySelector('.nav__menu')

  nav.addEventListener('click', function (event) {
      if (event.target.closest('.menu__btn')) {
          menu.classList.toggle('show--menu')
      }

      if (event.target.closest('.cerrar__btn')) {
        menu.classList.remove('show--menu')
    }

    if (event.target.closest('.nav__link')) {
        menu.classList.remove('show--menu')
    }
  })

}

export default showMenu