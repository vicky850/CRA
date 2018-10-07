export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: '',
      badge: {
        variant: 'info',
        text: '...',
      },
    },
    {
      title: true,
      name: 'User Manager',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Client Menu',
      url: '/client',
      icon: 'icon-pencil',
    },
    {
      name: 'E-Filing',
      url: '/efiling',
      icon: 'icon-puzzle',
    },
    {
      name: 'Fees Module',
      url: '/fee',
      icon: 'icon-cursor',
    },
    {
      name: 'table',
      url: '/base/tables',
      icon: 'icon-cursor',
    },
    {
      title: true,
      name: 'Reports',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Client Creation Report',
      url: '/users',
      icon: 'icon-speedometer',
    },
    {
      name: 'E-Filing Report',
      url: '/base/forms',
      icon: 'icon-speedometer icon-pie-chart',
    },
    {
      name: 'Fees Module Report',
      url: '/base/forms',
      icon: 'icon-speedometer icon-pie-chart',
    },
   
  ],
};
