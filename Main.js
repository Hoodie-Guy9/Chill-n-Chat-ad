document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");
    const title = document.querySelector(".server-name");
    const desc = document.querySelector(".server-description");
    const button = document.querySelector(".join-button");

    // Adding fade-in effect for all elements
    logo.style.opacity = 0;
    title.style.opacity = 0;
    desc.style.opacity = 0;
    button.style.opacity = 0;

    setTimeout(() => {
        logo.style.transition = 'opacity 1.5s';
        logo.style.opacity = 1;
    }, 500);
    setTimeout(() => {
        title.style.transition = 'opacity 1.5s';
        title.style.opacity = 1;
    }, 1000);
    setTimeout(() => {
        desc.style.transition = 'opacity 1.5s';
        desc.style.opacity = 1;
    }, 1500);
    setTimeout(() => {
        button.style.transition = 'opacity 1.5s';
        button.style.opacity = 1;
    }, 2000);
});
