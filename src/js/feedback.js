(function () {
    'use strict';
    window.addEventListener('load', function () {
        var show = document.getElementById('feedback-show'),
            send = document.getElementById('feedback-submit'),
            modal = document.getElementById('feedback-modal'),
            form = document.getElementById('feedback-form');
        show.addEventListener('click', function (e) {
            e.preventDefault();
            modal.classList.add('show');
            return false;
        });        
        modal.addEventListener('click', function (e) {
            if (e.target === form || form.contains(e.target)) {
                return;
            }
            modal.classList.remove('show');
        });
        window.addEventListener('keyup', function (e) {
            if (e.keyCode == 27) { 
                modal.classList.remove('show');
            } 
        })
        
        send.addEventListener('click', function (e) {
            //e.preventDefault();
            var invalid = form.querySelector("*:invalid");
            if (invalid) {
                invalid.focus();
                return;
            }
            //todo: send message
            return false;
        });
    });
})();