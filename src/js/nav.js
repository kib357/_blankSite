(function () {
    'use strict';
    window.addEventListener('load', function () {
        var navToggle = document.getElementById('nav-toggle');
        var nav = document.getElementById('nav');
        navToggle.addEventListener('click', function () {
            if (nav.classList.contains('collapse')) {
                nav.classList.remove('collapse');
            } else {
                nav.classList.add('collapse');
            }
        });
        var navLinks = document.getElementsByClassName('index-link');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', handleNavCLick);
        }
        function handleNavCLick(e) {
            nav.classList.add('collapse');
        }
    });
})();