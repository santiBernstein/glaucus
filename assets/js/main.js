// menu show //
const menuBars = document.getElementById('menu-bars');
const navMenu = document.getElementById('nav--menu');

function toggleNav(){
    //toggle: menu bars openc/closed
    menuBars.classList.toggle('change');
    navMenu.classList.toggle('show');
};

menuBars.addEventListener('click', toggleNav);

// active and remove menu //
const navLink = document.querySelectorAll('.nav--link')

//swiper

const swiper = new Swiper('.swiper', {
    
    spaceBetween: 16,
    loop: false,
    grabCursor: true,
    autoHeight: true,
    allowTouchMove: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        576:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView:1,
        },        
        1024:{
            slidesPerView: 1,
        },
    },     
   
  });