let cb1 = document.querySelector("#ck1")
let cb2 = document.querySelector("#ck2")
let cb3 = document.querySelector("#ck3")
let ck1 = document.querySelector("#ck")
let w = document.querySelector(".wrapper")
let h = document.querySelector(".heart")

function check() {
    if ( cb1.checked == true && cb2.checked == true && cb3.checked == true ) {
        setTimeout(() => { 
            w.style.display = "none"
            h.style.display = "block"
            document.body.style.backgroundImage = "url(img/background.jpg)"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundPosition = "center center"
            
            window.addEventListener('click', () => {
                w.style.display = "block"
                h.style.display = "none"
                document.body.style.background = "white"
            });
        }, 2000);
      if ( ! $('.heart').hasClass('throb')) {
          // Do things on Nav Close
          $('.heart').addClass('throb');
          
      } 
    } else {
      if ($('.heart').hasClass('throb')) {
          // Do things on Nav Close
          $('.heart').removeClass('throb');
      }
    }
}
