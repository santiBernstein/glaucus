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

function linkAction (){
    //active link
    navLink.forEach(n => n.classList.remove('active-link'))
    this.classList.add('active-link')

    //remove menu mobile    
    navMenu.classList.remove('show');
    menuBars.classList.remove('change');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll sections active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
                sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav--menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive)