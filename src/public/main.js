document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('bg-gray-900');
        } else {
            navbar.classList.remove('bg-gray-900');
        }
    });
});