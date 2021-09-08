// allows sending of native notifs
const notifier = require('node-notifier');
const sunCalc = require('suncalc');
const moment = require('moment');

const c = {
  l : console.log
};

// used to open a webpage when button clicked
const { exec } = require('child_process');

const latitude = 44.787
const longtitude = 20.4

// calling this sends a native notif
function sendNotifications(){

  console.log(new Date())

  let options = {
      timeZone: 'Europe/Belgrade',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },
    formatter = new Intl.DateTimeFormat([], options);

  console.log(formatter.format(new Date()));

  const todayDateObject = new Date();
  const tomorrowDateObject  = new Date((new Date()).valueOf() + 1000*3600*24);

  const currentDayObject = sunCalc.getTimes(todayDateObject, latitude, longtitude);

  const tomorrowTimes = sunCalc.getTimes(tomorrowDateObject, latitude, longtitude);
  const todayTimes = sunCalc.getTimes(todayDateObject, latitude, longtitude);
  console.log(currentDayObject);

  // for(const timeDescription in todayTimes){
  //   // console.log(timeDescription);
  //   const timeValue = todayTimes[timeDescription]
  //
  //   console.log(timeDescription + ' ' + moment(timeValue).fromNow())
  //
  //   // if positive thing [was],
  //   // if negative then [is]
  //
  //
  //   const timeDifference = new Date() - timeValue;
  //   console.log(timeDifference);
  // }

  // TODO: incorporate hours (so I know when to move from (tomorrow's sunset is ___) to ____


  // today time untils
  const timeToSunset = todayTimes.sunset;
  console.log('time to sunset')
  // if positive number, it already passed
  console.log(new Date () - timeToSunset);

  const timeToSunrise = todayTimes.sunrise;


  // tomorrow time untils
  const tomorrowSunrise = tomorrowTimes.sunrise;
  console.log('time to sunset tomorrow')
  console.log(new Date () - tomorrowSunrise);


  const displayTopString = 'Sunset was ' +  moment(timeToSunset).fromNow();
  const displaySubText = 'Sunrise is in ' +  moment(tomorrowSunrise).fromNow();

  console.log(displaySubText);

  // console.log('Sunset was ' +  moment(timeToSunset).fromNow());

  // notify using node-notifier
  notifier.notify({

    /** presentational code **/
    // top bar
    title: displayTopString,
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


// function getSunHours(){
//   var times = sunCalc.getTimes(new Date(), latitude, longtitude);
//   // console.log(times);
//
//   for(const timeDescription in times){
//     // console.log(timeDescription);
//     const timeValue = times[timeDescription]
//
//     console.log(timeDescription + ' ' + moment(timeValue).fromNow())
//
//     // if positive thing [was],
//     // if negative then [is]
//
//
//      const timeDifference = new Date() - timeValue;
//      console.log(timeDifference);
//   }
// }
//
// getSunHours()
