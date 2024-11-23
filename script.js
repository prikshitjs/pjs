// for clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
startTime();

// for greeding
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.getElementById("greetings").innerHTML = greet;

// for data graph
window.addEventListener("load", () => {
  graph1();
  generateOTP();
});
let graph1 = () => {
  const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let random1 = arr1[Math.floor(Math.random() * arr1.length)];
  let random2 = arr1[Math.floor(Math.random() * arr1.length)];
  let random3 = arr1[Math.floor(Math.random() * arr1.length)];
  let random4 = arr1[Math.floor(Math.random() * arr1.length)];
  let random5 = arr1[Math.floor(Math.random() * arr1.length)];
  let random6 = arr1[Math.floor(Math.random() * arr1.length)];
  let random7 = arr1[Math.floor(Math.random() * arr1.length)];
  let random8 = arr1[Math.floor(Math.random() * arr1.length)];

  let graph1 = document.querySelector(".g1");
  let graph2 = document.querySelector(".g2");
  let graph3 = document.querySelector(".g3");
  let graph4 = document.querySelector(".g4");
  let graph5 = document.querySelector(".g5");
  let graph6 = document.querySelector(".g6");
  let graph7 = document.querySelector(".g7");
  let graph8 = document.querySelector(".g8");

  graph1.style.height = random1 + "%";
  graph2.style.height = random2 + "%";
  graph3.style.height = random3 + "%";
  graph4.style.height = random4 + "%";
  graph5.style.height = random5 + "%";
  graph6.style.height = random6 + "%";
  graph7.style.height = random7 + "%";
  graph8.style.height = random8 + "%";
  // const g_height = [random1, random2, random3];
  // let nums = Math.max(...g_height);
  // let sca = document.querySelector(".sca");
  // sca.style.height = `calc(${nums}% - 20px)`;
};
let delay = "10000";
setInterval(function () {
  graph1();
  generateOTP();
}, delay);

// gernate data number

// Function to generate OTP
function generateOTP() {
  // Declare a digits variable
  // which stores all digits
  let digits = "0123456789";
  let OTP = "";
  let len = digits.length;
  for (let i = 0; i < 9; i++) {
    OTP += digits[Math.floor(Math.random() * len)];
  }
  let datano = document.querySelector(".data-no");
  datano.innerText = OTP;
  return OTP;
}
