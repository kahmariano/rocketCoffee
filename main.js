const btnMobile = document.getElementById('btn-primary')
/* criei uma const que vai receber o id do button */

/* função que ao clicar sera ativado o sidebar */

function toggleMenu() {
  const navMobile = document.getElementById('nav-mobile')
  navMobile.classList.toggle('active')
}

btnMobile.addEventListener(
  'click',
  toggleMenu
) /* adicionando um evento a const (event 'click') quando acionado inicie a funçao (toggleMenu) */
