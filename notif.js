const notifier = require('node-notifier');
const open = require('open');
const { exec } = require('child_process');

// String
// notifier.notify('Message');

function sendNotifications(){
// Object
  notifier.notify({
    title: 'Please do a quick mindfulness video!',
    // subtitle: "hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello! hello!",
    message: 'Mindfulness 🧘 increases positive emotion 😁 and decreases autopilot mode 🛩 Do it you\'ll love it! 🤑',
    timeout: 5,
    open: 'https://meddit.app/meditations?orderBy=rating',
    actions: 'Absolutely can\'t',
    closeLabel: 'Let\'s do it',
    dropdownLabel: 'Hello',
    wait: true,
    // contentImage: '/Users/anthony/Development/notif/favicon.png',
    // icon: '/Users/anthony/Development/notif/favicon.png',
  }, async function(err, res, metadata){

    if(res === 'closed'){
      exec('open https://meddit.app/meditations?orderBy=rating')
      // open('https://meddit.app', { url: true });
    }

    console.log(err, res, metadata)

  });
}
console.log('sending a notif')
sendNotifications()
setInterval(function(){
  console.log('sending a notif')
  sendNotifications()
}, 1000 * 60 * 5)

