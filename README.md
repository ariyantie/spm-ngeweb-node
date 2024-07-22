# spm-ngeweb-node

cd $HOME

# UPDATE PACKAGE
pkg update && upgrade -y

#INSTALL NODE + NANO
pkg install nodejs nano -y

#BUAT FOLDER

mkdir SPAM

cd SPAM

#BUAT FILE EXT .JS

nano app.js


# PASTE SCRIPT NYA
# KALAU UDAH KLIK CTRL + X LALU KETIK Y TERUS ENTER
# CEK FILE UDAH ADA BELUM

cat app.js

# KALU UDAH ADA

npm i axios 
npm i chalk@4.1.2 
npm i random-useragent
npm i console

#KALAU UDAH SEMUAA

node app.js
