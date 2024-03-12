function showMenu() {
  const nav = document.querySelector('.header');
  const menu = document.querySelector('.nav__menu')

  nav.addEventListener('click', function (event) {
      if (event.target.closest('.menu__btn')) {
          menu.classList.toggle('show--menu')
      }
  })

}

export default showMenu