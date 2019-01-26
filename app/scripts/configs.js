const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDay();

const fakeEvents = [
  {
    title: 'All Day Event',
    start: new Date(y, m, 1)
  },
  {
    id: 999,
    title: 'Repeating Event',
    start: new Date(y, m, d-3, 16, 0),
    allDay: false,
    className: 'info'
  },
  {
    id: 999,
    title: 'Repeating Event',
    start: new Date(y, m, d+4, 16, 0),
    allDay: false,
    className: 'info'
  },
  {
    title: 'Meeting',
    start: new Date(y, m, d, 10, 30),
    allDay: false,
    className: 'important'
  },
  {
    title: 'Lunch',
    start: new Date(y, m, d, 12, 0),
    end: new Date(y, m, d, 14, 0),
    allDay: false,
    className: 'important'
  },
  {
    title: 'Birthday Party',
    start: new Date(y, m, d+1, 19, 0),
    end: new Date(y, m, d+1, 22, 30),
    allDay: false,
  },
  {
    title: 'Click for Google',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: 'https://google.com/',
    className: 'success'
  }
];

export const fullCalendarConfig = {
  header: {
    left: 'title',
    center: 'agendaDay,agendaWeek,month',
    right: 'prev,next today'
  },
  allDaySlot: false,
  navLinks: true, // can click day/week names to navigate views
  editable: true,
  themeSystem: 'standard',
  defaultView: 'month',
  dropable: true,
  eventLimit: true, // allow "more" link when too many events
  events: fakeEvents,
  // loading: function(bool) {
  //   $('#loading').toggle(bool);
  // },
  eventRender: function(event, el) {
    // render the timezone offset below the event title
    if (event.start.hasZone()) {
      el.find('.fc-title').after(
        $('<div class="tzo"/>').text(event.start.format('Z'))
      );
    }
  }
};

// Client datatable seed (Development Only)
export const clientData = [
  {
    id: 2,
    email: 'diallo@elmadeal.com',
    first_name: 'Diallo',
    last_name: 'Diallo',
    phone_number: '+221 11-111-11-12',
    city: 'Dakar',
    address: 'Omael beauty, dakar ',
    birthday: null,
    created_at: '2019-01-16T23:10:38.584Z',
    updated_at: '2019-01-16T23:10:38.584Z'
  },
  {
    id: 6,
    email: 'marieme@elmadeal.com',
    first_name: 'Marieme',
    last_name: 'Marieme',
    phone_number: '+221 11-111-11-16',
    city: 'Dakar',
    address: 'dakar',
    birthday: null,
    created_at: '2019-01-16T23:10:39.160Z',
    updated_at: '2019-01-16T23:10:39.160Z'
  },
  {
    id: 7,
    email: 'anne@elmadeal.com',
    first_name: 'Anne',
    last_name: 'Anne',
    phone_number: '+221 11-111-11-17',
    city: 'Dakar',
    address: 'Point E',
    birthday: null,
    created_at: '2019-01-16T23:10:39.307Z',
    updated_at: '2019-01-16T23:10:39.307Z'
  },
  {
    id: 8,
    email: 'marie@elmadeal.com',
    first_name: 'Marie',
    last_name: 'Marie',
    phone_number: '+221 11-111-11-18',
    city: 'Dakar',
    address: 'Liberté 6 extension',
    birthday: null,
    created_at: '2019-01-16T23:10:39.463Z',
    updated_at: '2019-01-16T23:10:39.463Z'
  }
];
