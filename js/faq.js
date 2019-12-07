(() => {
    console.log('"faq.js" link successful');

    const items = document.querySelectorAll("#question-answer a");

    function toggleAccordion(){
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }
    
    items.forEach(item => item.addEventListener('click', toggleAccordion));    

})();