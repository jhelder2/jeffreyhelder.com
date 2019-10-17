(() => {
    console.log('"sticky-nav.js" link successful');

    let 
        scrollPosition = window.pageYOffset,
        newScroll = window.pageYOffset,
        stickyNav = document.querySelector('header');
    
    window.onscroll = function (){
        scrollPosition = window.scrollY;

        if (scrollPosition >= 10) {
            stickyNav.classList.add("sticky-nav");
            stickyNav.classList.remove("start-nav");
            stickyNav.classList.remove("sticky-nav-hide");
        };
        if (scrollPosition <= newScroll) {
            stickyNav.classList.add("sticky-nav-hide");
        };
        if (scrollPosition <= 10) {
            stickyNav.classList.add("start-nav");
            stickyNav.classList.remove("sticky-nav");
            stickyNav.classList.remove("sticky-nav-hide");
        };

        newScroll = window.scrollY;
    };

})();