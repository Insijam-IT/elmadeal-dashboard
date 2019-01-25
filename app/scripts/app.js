import { clientData as dataSet, fullCalendarConfig } from './configs';

class App {
  constructor() {
    // clients
    this.$clientsView = $('.view.clients');
    this.$clientsTableContainer = $('#clients');
    // calendar
    this.$calendarView = $('.view.calendar');
    this.$calendarContainer = $('#calendar');

    this.isCalendarInitialView = false;
  }

  /**
   * Toggles side menu display on hamburger menu button click
   */
  toggleSideMenu() {
    const $sideMenuToggleButton = $('.hamburger-js');
    const $sideMenu = $('.side-menu-js');
    const $hamburgerIcon = $sideMenuToggleButton.find('.icon');

    $sideMenuToggleButton.on('click', () => {
      $sideMenu.toggleClass('shrunken');

      if ($sideMenu.hasClass('shrunken')) {
        $hamburgerIcon.attr('class', 'align left icon');
      } else {
        $hamburgerIcon.attr('class', 'align justify icon');
      }
    });
  }

  /**
   * Toggles dropdown display on user button click
   */
  toggleDropdownMenu() {
    const $dropdownToggleButton = $('.dropdown-btn-js');
    const $dropdownMenu = $('.dropdown-menu-js');

    $dropdownToggleButton.on('click', event => {
      event.stopImmediatePropagation();
      $dropdownToggleButton.toggleClass('active');
      $dropdownMenu.transition('fade down');
    });

    $(document).on('click', event => {
      if (!event.target.isEqualNode($dropdownToggleButton.get(0))) {
        $dropdownMenu.removeClass('active');
        $dropdownToggleButton.removeClass('active');
      }
      event.stopPropagation();
    });
  }

  /**
   * Initializes clients datatable
   */
  initializeClientsTable() {
    this.$clientsTableContainer.DataTable({
      data: dataSet,
      columns: [
        { data: 'email', title: 'Email' },
        { data: 'first_name', title: 'Nom' },
        { data: 'last_name', title: 'Prénom' },
        { data: 'phone_number', title: 'Teléphonne' },
        { data: 'address', title: 'Adresse' },
        { data: 'city', title: 'Ville' }
      ],
      deferRender: true
    });
  }


  /**
   * Initializes full calendar
   */
  initializeCalendar() {
    this.$calendarContainer.fullCalendar(fullCalendarConfig);
  }

  init() {
    this.toggleSideMenu();
    this.toggleDropdownMenu();
    this.initializeClientsTable();
    this.initializeCalendar();
  }
}

export default App;