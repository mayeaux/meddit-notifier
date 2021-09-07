const notifier = require('node-notifier');
const open = require('open');
// String
// notifier.notify('Message');

// Object
notifier.notify({
  title: 'Please do a quick mindfulness video!',
  // subtitle: "hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello!",
  message: 'Mindfulness 🧘 increases positive emotion 😁 and decreases autopilot mode 🛩 Do it you\'ll love it! 🤑',
  timeout: 5,
  open: 'https://meddit.app/meditation/u4gZgnCy5ew/1?isMbsr=true',
  actions: 'Absolutely can\'t',
  closeLabel: 'Let\'s do it',
  dropdownLabel: 'Hello',
  wait: true,
  // contentImage: '/Users/anthony/Development/notif/favicon.png',
  // icon: '/Users/anthony/Development/notif/favicon.png',
}, async function(err, res, metadata){

  if(res === 'closed'){
    open('https://meddit.app');
  }

  console.log(err, res, metadata)

});
