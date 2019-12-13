(() => {
    console.log('"gallery_expand.js" link successful');

    let
        picture = document.querySelectorAll('.pic');
    
    picture.forEach(pic =>{
        pic.addEventListener("click", function(e) {

            if (pic.classList.contains("expand")) {

                this.classList.remove("expand");

            }else{

                this.classList.add("expand");
            };
        });
    });

})();