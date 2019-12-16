/* Materialize */

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
});

/* JS */
const nav = document.querySelector(".nav-extended");

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        nav.classList.add('scroll');
    } else if (window.scrollY < 200) {
        nav.classList.remove('scroll');
    }

});

/* Maps */

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.9, lng: 2.3},
        zoom: 12
    });
}
  