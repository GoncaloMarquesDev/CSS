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
    event.preventDefault(); // evita que o <a> recarregue a página
  video.play(); // inicia o vídeo
 
  });