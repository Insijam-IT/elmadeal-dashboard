class App {
  constructor() {
    this.sideMenuToggleButton = document.querySelector('.hamburger-js');
    this.sideMenu = document.querySelector('.side-menu-js')
  }

  toggleSideMenu() {
    this.sideMenuToggleButton.addEventListener('click', () => {
      this.sideMenu.classList.toggle('shrunken');
    });
  }

  init() {
    this.toggleSideMenu();
  }
}


window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
