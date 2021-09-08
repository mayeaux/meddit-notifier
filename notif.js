const notifier = require('node-notifier');
const { exec } = require('child_process');

function sendNotifications(){
  // notify using node-notifier
  notifier.notify({

    /** presentational code **/
    // top bar
    title: 'Please do a quick mindfulness video!',
    // notif text
    message: 'Mindfulness 🧘 increases positive emotion 😁 and decreases autopilot mode 🛩 Do it you\'ll love it! 🤑',
    // top button (actually a close button but used for opening)
    actions: 'Absolutely can\'t',
    // bottom button (we will use it to open)
    closeLabel: 'Let\'s do it',

    /** how long to display notif **/
    wait: true,
    timeout: 295,

    // link to open when main notif body is clicked
    open: 'https://meddit.app/meditations?orderBy=rating',

  }, async function(err, res, metadata){

    // if top button is clicked. For some reason Apple maps this as 'closing'
    // when it feels more like a natural open button to me (I want to maximize affirmative not negative)
    if(res === 'closed'){
      exec('open https://meddit.app/meditations?orderBy=rating')
    }

    console.log(err)
    console.log(res);
    console.log(metadata);

  });
}

// send one off right when boot
console.log('sending a notif')
sendNotifications()

// send a new notif every 5 minutes
setInterval(function(){
  console.log('sending a notif')
  sendNotifications()
}, 1000 * 60 * 5)

