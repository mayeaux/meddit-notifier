// allows sending of native notifs
const notifier = require('node-notifier');
const sunCalc = require('suncalc');
const moment = require('moment');

// used to open a webpage when button clicked
const { exec } = require('child_process');

// calling this sends a native notif
function sendNotifications(){
  // notify using node-notifier
  notifier.notify({

    /** presentational code **/
    // top bar
    title: 'Sun sets in 2 hours 10 minutes',
    // notif text
    message: 'Mindfulness 🧘 increases positive emotion 😁 and decreases autopilot mode 🛩 Do it you\'ll love it! 🤑',

    // BUTTONS (actually a close button but used for opening)
    actions: 'Close',
    // bottom button (we will use it to open)
    closeLabel: 'Acknowledge',

    /** how long to display notif **/
    wait: true,
    timeout: 295,

    // link to open when main notif body is clicked
    open: 'https://meddit.app/meditations?orderBy=rating',

    // contentImage: '/Users/anthony/Development/sunlight-notifier/node_modules/node-notifier/vendor/mac.noindex/terminal-notifier.app/Contents/Resources/Terminal.icns'

  }, async function(err, res, metadata){

    // if top button is clicked. For some reason Apple maps this as 'closing'
    // when it feels more like a natural open button to me (I want to maximize affirmative not negative)
    // if(res === 'closed'){
    //   exec('open https://meddit.app/meditations?orderBy=rating')
    // }

    console.log(err)
    console.log(res);
    console.log(metadata);

  });
}

// // send one off right when boot
// console.log('sending a notif')
sendNotifications()
//
// // send a new notif every 5 minutes
// setInterval(function(){
//   console.log('sending a notif')
//   sendNotifications()
// }, 1000 * 60 * 5)


const latitude = 44.787
const longtitude = 20.4

function getSunHours(){
  var times = sunCalc.getTimes(new Date(), latitude, longtitude);
  // console.log(times);

  for(const timeDescription in times){
    // console.log(timeDescription);
    const timeValue = times[timeDescription]

    console.log(timeDescription + ' ' + moment(timeValue).fromNow())

    // if positive thing [was],
    // if negative then [is]


     const timeDifference = new Date() - timeValue;
     console.log(timeDifference);
  }
}

getSunHours()
