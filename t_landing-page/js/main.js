window.addEventListener('scroll', function() {
    
    if (window.pageYOffset >= 1) {
        document.querySelector('.navbar').classList.add('nav-fixed');
    } else {
        document.querySelector('.navbar').classList.remove('nav-fixed');
    }
});


 const video = document.getElementById("myVideo");
  const btn = document.getElementById("play");
  btn.addEventListener("click", (event) => {
    event.preventDefault(); 
  video.play(); 
 
  });

const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.main-menu');

hamburger.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
});
