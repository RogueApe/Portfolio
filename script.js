const navBar = document.querySelector('.nav-bar');
const hamburger = document.querySelector('.hamburger');
const links = navBar.querySelectorAll("a");

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('nav-open');
    hamburger.classList.toggle('toggle');
});

links.forEach(links => {
    links.addEventListener('click', () => {
        navBar.classList.toggle('nav-open');
        hamburger.classList.toggle('toggle');
    });
});