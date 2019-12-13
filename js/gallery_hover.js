(() => {
    console.log('"gallery_hover.js" link successful');

    let
        picture = document.querySelectorAll('.pic');
    
    picture.forEach(pic =>{
        pic.addEventListener("mouseover", function(e) {
            
            this.classList.add("pop");

            pic.addEventListener("mouseout", function(e) {

                this.classList.remove("pop");
            });
        });
    });

})();