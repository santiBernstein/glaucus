document.addEventListener(
  "DOMContentLoaded",
  function () {

    // Active Menu Links
    const initActiveLinks = () => {
        // Busco links
        const links = document.getElementsByClassName("nav--link")
        // Leo la URI
        const uri = window.location.pathname
        // Busco que link tiene la misma propiedad href que la URI
        for (let link of links) {
            const { pathname } = link
            console.log(pathname, uri, link)
            if (pathname == uri) {
                link.classList.add("active-link")
            }
        }
    }
    initActiveLinks();

    // menu show //
    const menuBars = document.getElementById("menu-bars");
    const navMenu = document.getElementById("nav--menu");

    function toggleNav() {
      //toggle: menu bars openc/closed
      menuBars.classList.toggle("change");
      navMenu.classList.toggle("show");
    }

    menuBars.addEventListener("click", toggleNav);

    // active and remove menu //
    const navLink = document.querySelectorAll(".nav--link");

    function linkAction() {
      //active link
      navLink.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");

      //remove menu mobile
      navMenu.classList.remove("show");
      menuBars.classList.remove("change");
    }

    navLink.forEach((n) => n.addEventListener("click", linkAction));

    //swiper
    const swiper = new Swiper(".swiper", {
      spaceBetween: 16,
      loop: false,
      grabCursor: true,
      height: 100,
      allowTouchMove: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  false
);
