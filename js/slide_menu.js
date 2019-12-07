(() => {
    console.log('"slide_menu.js" link successful');

    let 
        burger = document.querySelector('.burger'),
        menu = document.querySelector('#main-nav');

    function slideNav() {
            menu.classList.toggle('drop-menu-hide');
        }

    burger.addEventListener('click', slideNav);

})();