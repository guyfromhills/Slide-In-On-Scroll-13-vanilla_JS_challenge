




// run function once in wait's value millisec duration
function debounce(func, wait = 20, immediate = true) {

    var timeout;

    return function() 
    {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);

    };
  }

 //grabbing images
  const sliderImages = document.querySelectorAll(".slide-in");

  //check slide
function checkSlide(e){
    console.count(window.scrollY);
    sliderImages.forEach( function (sliderImage){

        //halfway through the image
        const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);              
       
        //bottom of image, to grab the bottom of image we need to add offsettop( distance from top to top of image) + image height
        const imageBottom = sliderImage.offsetTop  + sliderImage.height
        
        const isHalfShown = slideInAt > sliderImage.offsetTop

        const isNotScrolledPast =  window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast)
        {
            sliderImage.classList.add("active");
        }

        else{
            sliderImage.classList.remove("active");


        }
    })


}


  //if slide happens call check slider function
      window.addEventListener("scroll", debounce(checkSlide));
