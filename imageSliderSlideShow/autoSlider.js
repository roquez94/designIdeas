      //Automatic image change every 5 seconds
      //function autoSlides() {
      //};

      //remodel to replace imageSlider module 
      //(3/20/23) add to index.html when finished

      let index = 0;

      const slides = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');

      let changeSlide = () => {
        if (index < 0){
            index = slides.length-1
        }
        
        if (index > slides.length-1) {
            index = 0;
        }

        console.log(slides[index]);
        console.log(dots[index]);

        for (let i=0; i<slides.length; i++){
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[index].style.display = "block";
        dots[index].className += " active";

        index ++;
        setTimeout(changeSlide, 5000)
      }

      changeSlide()