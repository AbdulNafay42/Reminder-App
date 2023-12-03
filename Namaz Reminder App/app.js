// namaz time object

let Fajr = "11:13:40 PM",
  Zuhr = "12:17:00 PM",
  Asar = "04:08:00 PM",
  Maghrib = "05:44:00 PM",
  Isha = "07:03:00 PM";

var currentTimeElement = document.getElementById("currentTime");

function updateCurrentTime() {
  var currentTime = moment().format("hh:mm:ss A");

  currentTimeElement.textContent = currentTime;
}

setInterval(updateCurrentTime, 1000);
var notification;
// // FAJAR INTERVAL
setInterval(
  () => {
    var currentTime = moment().format("hh:mm:ss A");
    currentTimeElement.textContent = currentTime;
    console.log(Fajr);
    if (Fajr === currentTime) {
      console.log("fajr time");
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        notification = new Notification("Reminder! Time's up");
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            notification = new Notification("Notification Permission Granted");
          }
        });
      }
    }
  },

  1000
);

// time match

// zuhr intervel

setInterval((updateCurrentTime) => {
  var currentTime = moment().format("hh:mm:ss A");
  currentTimeElement.textContent = currentTime;

  // console.log(parseData[0].Zuhr, currentTime);
  if (Zuhr === currentTime) {
    console.log("zuhr time");
  }
}, 1000);

// asar interval

setInterval((updateCurrentTime) => {
  var currentTime = moment().format("hh:mm:ss A");
  currentTimeElement.textContent = currentTime;

  //   console.log(parseData[0].Asar, currentTime);
  if (Asar === currentTime) {
    console.log("Asar time");
  }
}, 1000);

// magrib interval

setInterval((updateCurrentTime) => {
  var currentTime = moment().format("hh:mm:ss A");
  currentTimeElement.textContent = currentTime;

  //   console.log(parseData[0].Maghrib, currentTime);
  if (Maghrib === currentTime) {
    console.log("Maghrib time");
  }
}, 1000);

// Isha interval

setInterval((updateCurrentTime) => {
  var currentTime = moment().format("hh:mm:ss A");
  currentTimeElement.textContent = currentTime;

  //   console.log(parseData[0].Isha, currentTime);
  if (Isha === currentTime) {
    console.log("Isha time");
  }
}, 1000);

// // namaz time object
// var prayerTimes = [
//   {
//     Fajr: "0:56:30 PM",
//     Zuhr: "08:32 PM",
//     Asr: "04:08 PM",
//     Maghrib: "05:44 PM",
//     Isha: "07:03 PM",
//   },
// ];
// // localstorage data stored
// var localData = localStorage.setItem(
//   "prayerTimes",
//   JSON.stringify(prayerTimes)
// );
// // localstorage get data

// var parseData = JSON.parse(localStorage.getItem("prayerTimes"));
// console.log(parseData[0].Fajr);

// var alarmOn = false;

// var currentTimeElement = document.getElementById("currentTime");
// function updateCurrentTime() {
//   var currentTime = moment().format("hh:mm:ss A");

//   updateCurrentTime();
// }

// // FAJAR INTERVAL
// if(fajrBell === true){
//   setInterval((updateCurrentTime) => {

//   var currentTime = moment().format("hh:mm:ss A");
//   currentTimeElement.textContent = currentTime;

//   console.log(parseData[0].Fajr, currentTime);
//   if (alarmOn) {
//     if (parseData[0].Fajr === currentTime) {
//       console.log("fajr time");
//     }

//   }  else{
//     console.log("alarm off");
//   }}
// , 1000);
// }
// function removeFajrIcon(){
//   fajrBell = false;
//   clearInterval(intervalId);
// }
// // fajr
// function fajrIcon() {
//   alarmOn = true;
//   var currentTime = moment().format("hh:mm:ss A");

//   var fajrBell = document.getElementById("fajrBell");

//   if (fajrBell.classList.contains("fa-solid")) {
//     fajrBell.classList.remove("fa-solid", "fa-bell-slash");
//     fajrBell.classList.add("fa-regular", "fa-bell");

//     Swal.fire({
//       title: "Namaz Reminder",
//       text: "Your Fajar reminder is set.",
//       icon: "info",
//     });
//     if (parseData[0].Fajr === currentTime) {
//       console.log("fajr time");
//     }
//   } else {
//     fajrBell.classList.remove("fa-regular", "fa-bell");
//     fajrBell.classList.add("fa-solid", "fa-bell-slash");

//     Swal.fire({
//       title: "Namaz Reminder",
//       text: "Your Fajar reminder is removed.",
//       icon: "info",
//     });
//   }

//   console.log(fajrBell.classList);
// }

// // zuhr interval
// setInterval((updateCurrentTime) => {
//   var currentTime = moment().format("hh:mm:ss A");
//   currentTimeElement.textContent = currentTime;

//   console.log(parseData[0].Fajr, currentTime);
//   if (alarmOn) {
//     if (parseData[0].Fajr === currentTime) {
//       console.log("fajr time");
//     }
//   } else if (alarmOn === false) {
//     console.log("alarm off");
//   }
// }, 1000);
// // zuhr
// function zuhrIcon() {
//   var zuhrBell = document.getElementById("zuhrBell");

//   if (zuhrBell.classList.contains("fa-solid")) {
//     zuhrBell.classList.remove("fa-solid", "fa-bell-slash");
//     zuhrBell.classList.add("fa-regular", "fa-bell");

//     Swal.fire({
//       title: "Namaz Reminder",
//       text: "Your Zuhr reminder is set.",
//       icon: "info",
//     });
//   } else {
//     zuhrBell.classList.remove("fa-regular", "fa-bell");
//     zuhrBell.classList.add("fa-solid", "fa-bell-slash");
//     Swal.fire({
//       title: "Namaz Reminder",
//       text: "Your Zuhr reminder is Remove.",
//       icon: "info",
//     });
//   }
//   console.log(zuhrBell.classList);
// }

// //     // ASAR

// //     function asarIcon() {
// //         var asarBell = document.getElementById("asarBell");

// //         if (asarBell.classList.contains("fa-solid")) {
// //           asarBell.classList.remove("fa-solid", "fa-bell-slash");
// //           asarBell.classList.add("fa-regular", "fa-bell");

// //             Swal.fire({
// //                 title: "Namaz Reminder",
// //                 text: "Your Asar reminder is set.",
// //                 icon: "info"
// //             });
// //         }
// //         else{
// //           asarBell.classList.remove("fa-regular", "fa-bell");
// //           asarBell.classList.add("fa-solid", "fa-bell-slash");
// //             Swal.fire({
// //                 title: "Namaz Reminder",
// //                 text: "Your Asar reminder is Remove.",
// //                 icon: "info"
// //             });
// //           }

// //         console.log(asarBell.classList);
// //     }
// //     // Magrib

// //     function magribIcon() {
// //       var magribBell = document.getElementById("magribBell");

// //       if (magribBell.classList.contains("fa-solid")) {
// //         magribBell.classList.remove("fa-solid", "fa-bell-slash");
// //         magribBell.classList.add("fa-regular", "fa-bell");

// //         Swal.fire({
// //             title: "Namaz Reminder",
// //             text: "Your Magrib reminder is set.",
// //             icon: "info"
// //         });

// //       }
// //       else{
// //         magribBell.classList.remove("fa-regular", "fa-bell");
// //         magribBell.classList.add("fa-solid", "fa-bell-slash");
// //         Swal.fire({
// //             title: "Namaz Reminder",
// //             text: "Your Asar reminder is Remove.",
// //             icon: "info"
// //         });
// //       }
// //       console.log(magribBell.classList);
// //     }

// //     // isha

// //     function ishaIcon() {
// //       var ishaBell = document.getElementById("ishaBell");

// //       if (ishaBell.classList.contains("fa-solid")) {
// //         ishaBell.classList.remove("fa-solid", "fa-bell-slash");
// //         ishaBell.classList.add("fa-regular", "fa-bell");

// //         Swal.fire({
// //             title: "Namaz Reminder",
// //             text: "Your Isha reminder is set.",
// //             icon: "info"
// //         });
// //       }
// //       else{
// //         ishaBell.classList.remove("fa-regular", "fa-bell");
// //         ishaBell.classList.add("fa-solid", "fa-bell-slash");
// //         Swal.fire({
// //             title: "Namaz Reminder",
// //             text: "Your Asar reminder is Remove.",
// //             icon: "info"
// //         });
// //       }
// //       console.log(ishaBell.classList);
// //     }
