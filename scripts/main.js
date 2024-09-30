





const menu = document.querySelector('.menu');
const hamburgermenu = document.querySelector ('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');


hamburgermenu.addEventListener('click' , displaymenu);
menu.addEventListener('click' , displaymenu);
function displaymenu (){
    if(menu.classlist.contains('tampil')) {
        menu.classList.remove('tampil');
        iconBars.stayle.display='inline';
        iconBars.stayle.display ='none';
    } else {
        menu.classList.add('tampil');
        iconBars.stayle.display='none';
        iconClose.stayle.display='inline';
    }
}

const express = require('express');
const app = express();

app.use(express.static('public', { maxAge: 31536000 })); // Cache max age in seconds

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  

