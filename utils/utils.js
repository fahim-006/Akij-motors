// import moment from "moment";

// export function debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// export function checkValidEmail(email) {
//   if (!email) {
//     return false;
//   }

//   return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
// }

// export function isoToUtcDate(date) {
//   if (!date) {
//     return "";
//   }

//   date = moment(date);
//   return date.utc().format("YYYY-MM-DD");
// }

// export function isoToUtcDateTime(date) {
//   if (!date) {
//     return "";
//   }

//   date = new Date(date);
//   return date.toLocaleString();
// }

// export function getFormatDate(date) {
//   let month_names = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   if (date) {
//     return `${new Date(date).getDate()}
//     ${month_names[new Date(date).getMonth()]}
//     ${new Date(date).getFullYear()}
//   `;
//   } else {
//     return "";
//   }
// }

// export function getFormatDateJobPost(date) {
//   let month_names = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   return `${new Date(date).getDate()}
//           ${month_names[new Date(date).getMonth()]}
//           ${new Date(date).getFullYear()}
//         `;
// }

// export function getDayName(date) {
//   var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   var d = new Date(date);
//   var dayName = days[d.getDay()];
//   return dayName;
// }

// export function getEightyYear(start_year) {
//   const current = new Date();
//   let number = current.getFullYear();
//   var year = [{ id: number, name: number }];

//   [...Array(80)].map((el) => {
//     number = number - 1;
//     if (start_year) {
//       if (number < Number(start_year)) return;
//       year.push({ id: number, name: number });
//     } else {
//       year.push({ id: number, name: number });
//     }
//   });

//   return year;
// }

// export function getHourMinuteSeconds(date) {
//   return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

// export function showImage(image) {
//   if (!image) {
//     return require("../../src/assets/home/image-not-found.jpg");
//   } else {
//     if (image.split(":")[0] === "http" || image.split(":")[0] === "https") {
//       return image;
//     } else {
//       return `http://stage.flogapp.com${image}`;
//     }
//   }
// }

// export function isImage(file) {
//   var ext = file.split(".");
//   ext = ext[ext.length - 1].toLowerCase();
//   var arrayExtensions = ["jpg", "jpeg", "png", "bmp", "gif"];
//   // var arrayExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif' , 'raw' , 'indd' , 'al' , 'eps' , 'pdf' ,'tiff' , 'psd' , 'jfif' , 'webp' ];
//   if (arrayExtensions.lastIndexOf(ext) == -1) {
//     return false;
//   } else {
//     return true;
//   }
// }

// export function isVideo(file) {
//   var ext = file.split(".");
//   ext = ext[ext.length - 1].toLowerCase();
//   // var arrayExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif' , 'raw' , 'indd'];
//   var arrayExtensions = ["m4v", "avi", "mpg", "mp4", "webm"];
//   if (arrayExtensions.lastIndexOf(ext) == -1) {
//     return false;
//   } else {
//     return true;
//   }
// }

// export function isPdf(file) {
//   var ext = file.split(".");
//   ext = ext[ext.length - 1].toLowerCase();
//   // var arrayExtensions = ['jpg', 'jpeg', 'png', 'bmp', 'gif' , 'raw' , 'indd'];
//   var arrayExtensions = ["pdf"];
//   if (arrayExtensions.lastIndexOf(ext) == -1) {
//     return false;
//   } else {
//     return true;
//   }
// }

// export function capitalizeFirstLetter(s) {
//   return s[0].toUpperCase() + s.slice(1);
// }

// export function getDateBack(year = 18, month = 2, day = 0) {
//   const todays = new Date();
//   return new Date(
//     todays.getFullYear() - year,
//     todays.getMonth() - month,
//     todays.getDay() - day
//   );
// }

// export function getDateFromTime(time) {
//   const newTime = time.split(":");
//   var date = new Date();

//   date.setHours(newTime[0]);
//   date.setMinutes(newTime[1]);
//   date.setSeconds(newTime[2]);
//   return date;
// }

// export function linkify(inputText) {
//   var replacedText, replacePattern1, replacePattern2, replacePattern3;

//   //URLs starting with http://, https://, or ftp://
//   replacePattern1 =
//     /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
//   replacedText = inputText.replace(
//     replacePattern1,
//     '<a href="$1" target="_blank">$1</a>'
//   );

//   //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
//   replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
//   replacedText = replacedText.replace(
//     replacePattern2,
//     '$1<a href="http://$2" target="_blank">$2</a>'
//   );

//   //Change email addresses to mailto:: links.
//   replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
//   replacedText = replacedText.replace(
//     replacePattern3,
//     '<a href="mailto:$1">$1</a>'
//   );

//   return replacedText;
// }
