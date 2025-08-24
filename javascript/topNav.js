var modal = document.getElementById('sign-up');
var modal2 = document.getElementById('sign-in');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};

const mainNav = document.querySelector(".main-navbar");
const navToggle = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  const visibility = mainNav.getAttribute("data-visible")
  if (visibility === "false") {
    mainNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else if (visibility == "true") {
    mainNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
});

const navColored = document.querySelector(".navbar");
const navCenter = document.querySelectorAll(".HomePage");
const navLeft = document.querySelector(".maiden-crafts");
const navRight = document.querySelector(".addCart");
const navRight2 = document.querySelector(".join-now");
  document.addEventListener("scroll", () => {
    window.scrollY > 100 ? navColored.classList.add('colored') : navColored.classList.remove('colored');
  })
  document.addEventListener("scroll", () => {
    window.scrollY > 100 ? navLeft.classList.add('colored') : navLeft.classList.remove('colored');
  });
  document.addEventListener("scroll", () => {
    window.scrollY > 100 ? navRight.classList.add('colored') : navRight.classList.remove('colored');
  });
  document.addEventListener("scroll", () => {
    window.scrollY > 100 ? navRight2.classList.add('colored') : navRight2.classList.remove('colored');
  });
  navCenter.forEach((HomePage) => {
    document.addEventListener("scroll", () => {
      window.scrollY > 100 ? HomePage.classList.add('colored') : HomePage.classList.remove('colored');
    });
  });


  var slides = document.querySelectorAll(".slide")
  var btns = document.querySelectorAll(".btn")
  let currentSlide = 1;

  var manualNav = function(manual) {
    slides.forEach((slide) => {
      slide.classList.remove('active')
      
      btns.forEach((btn) => {
        btn.classList.remove('active')
      })
    })

    slides[manual].classList.add('active')
    btns[manual].classList.add('active')
  }

  btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
      manualNav(i)
      currentSlide = i;
    })
  })

  var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active')
    let i = 1

    var repeater = () => {
      setTimeout(function() {
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove('active')
        })
        slides[i].classList.add('active')
        btns[i].classList.add('active')
        i++

        if(slides.length == i ){
          i = 0;
        }
        if(i >= slides.length) {
          return;
        }
        repeater()
        }, 10000)
      }
      repeater();
    }
    repeat();

    
