// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 

}
var audio = document.getElementById("audioPlayer");
function playpause() {
    if (document.getElementById("checkboxInput").checked == false) {
      audio.pause();
     }
  
   else{
       audio.play();
   }
    }


// var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
});
// const { animate } = require("framer-motion");

// scroll sections
let sections =document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top>=offset && top < offset + height ){
            //active navbar links
            navlinks.forEach(links=>{
                links.classList.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
    });
    // active sections for animation on scroll
    sec.classList.add('show-animate');
}
//if want to use animation that repeats on scroll use this
else{
    sec.classList.remove('show-animate');
}
    });


    // sticky header
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

//animation footer on scroll
let footer = document.querySelector('footer');

footer.classList.toggle('show-animate', this.innerHeight +this.scrollY >= document.scrollingElement.scrollHeight);
}

