const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const argv = require('yargs').argv;
const chalk = require('chalk');

/* CONFIGURATION RANDOM */
function randompict(){
var a = ['https://cewekgenit.pics/wp-content/uploads/2020/07/Screenshot_68.jpg', 'https://photomemek.com/wp-content/uploads/2022/10/riona-suzuki-5-768x494.jpg','https://1.bp.blogspot.com/-ZGvSs45thoQ/XvY7Q2uSumI/AAAAAAAABgA/E-hJtpDzMmUN-w4ZrmCCi5ho9O9rmOixACLcBGAsYHQ/s1600/foto-memek-perawan-hot-terbaru-5.jpg','https://1.bp.blogspot.com/-RNZ8sY5inaM/XvY8uc9tdXI/AAAAAAAABgM/v51OQcFL4yETOMsxwIRdJCewwb26xWw4gCLcBGAsYHQ/s1600/foto-memek-perawan-hot-terbaru-6.jpg','https://1.bp.blogspot.com/-2MsZRgPXi0A/XvjcnSY0B_I/AAAAAAAABiA/3PLkJ3MKU0gBDmNJSYMZH4f_Ra-o1VVzQCLcBGAsYHQ/s1600/desahan-cewek-cantik-ngentot-goyang-diatas.jpg',
'https://www.photomemek.com/wp-content/uploads/2020/08/JJJJ05-768x1152.jpg',
'https://www.photomemek.com/wp-content/uploads/2020/08/JJJJ11-768x1152.jpg'


 ]
var randomIndex = Math.floor(Math.random() * a.length);
var randomValue = a[randomIndex];
return randomValue
}

function randomtext(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText = '';
  for (let i = 0; i < length; i++) {
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    randomText += randomChar;
  }
  return randomText;
}


/* CONFIG */

const id = argv.id
const token = argv.token
const img = randompict()
const url = `https://api.telegram.org/bot6687171483:AAEna7VfNBuYoD2ieFUzZEgSIqU1c5kmiRI/sendPhoto?chat_id=7183060338&photo=https://awsimages.detik.net.id/community/media/visual/2017/12/06/6414c1ae-fcd1-49a6-8316-4a71c29f93ff_43.jpg?w=600&q=90}`;
const urltxt = `https://api.telegram.org/bot6687171483:AAEna7VfNBuYoD2ieFUzZEgSIqU1c5kmiRI/sendMessage?chat_id=7183060338&text=DUET_MASUK_KONTOL_JUGA_MASUK`





function kirimOTP() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.responType = 'json';
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(
        chalk.cyan('[ IMG ]'), 
        chalk.white(' RESPON SERVER '), 
        chalk.green(xhr.status + ' OKK'), 
        chalk.white(' •> '), 
        chalk.green('Succes Spam'));
        
      } else if (xhr.status == 0) {
        console.log(
        chalk.cyan('[ IMG ]'), 
        chalk.white(' RESPON SERVER   '), 
        chalk.yellow(xhr.status + ' BAD'), 
        chalk.white(' •> '), 
        chalk.red('Server Bussy / Hang Out'));
        
      } else {
        const jsonResponse = JSON.parse(xhr.responseText);
        const dsc = jsonResponse.description;
        console.log(
        chalk.cyan('[ IMG ]'), 
        chalk.white(' RESPON SERVER '), 
        chalk.yellow(xhr.status + ' BAD'), chalk.white(' •> '), 
        chalk.red(dsc));
      }
    }
  };
  kirimText()
}



function kirimText() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", urltxt, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.responType = 'json';
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(
        chalk.cyan('[ TXT ]'), 
        chalk.white(' RESPON SERVER '), 
        chalk.green(xhr.status + ' OKK'), 
        chalk.white(' •> '), 
        chalk.green('Succes Spam'));
        
      } else if (xhr.status == 0) {
        console.log(
        chalk.cyan('[ TXT ]'), 
        chalk.white(' RESPON SERVER   '), 
        chalk.yellow(xhr.status + ' BAD'), 
        chalk.white(' •> '), 
        chalk.red('Server Bussy / Hang Out'));
        
      } else {
        const jsonResponse = JSON.parse(xhr.responseText);
        const dsc = jsonResponse.description;
        console.log(
        chalk.cyan('[ TXT ]'), 
        chalk.white(' RESPON SERVER '), 
        chalk.yellow(xhr.status + ' BAD'), chalk.white(' •> '), 
        chalk.red(dsc));
      }
    }
  };
  
}



// Call the kirimOTP function every 10 milliseconds (or adjust the interval as needed)
setTimeout(function () {
  var kata = `
#################################################
#                                               # 
#          SCRIPT SPAMMER BOT TELEG             # 
#                  BY MAZLANA                   # 
#################################################`
  console.log(kata);
}, 10);

setTimeout(function () {
  setInterval(kirimOTP, 200);
}, 100); // Example: send OTP every 10 seconds
