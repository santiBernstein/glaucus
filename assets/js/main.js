

  document.addEventListener('DOMContentLoaded', function () {
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

function linkAction () {
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile    
    navMenu.classList.remove('show');
    menuBars.classList.remove('change');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

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
    }
  });
  }, false);