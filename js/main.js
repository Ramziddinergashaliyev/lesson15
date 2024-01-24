let modeBtn = document.getElementById("mode-btn");
let navbar = document.getElementById("navbar");
let backtop = document.getElementById("backtop");
let navList = document.getElementById("navList");
let barBtn = document.getElementById("nav__hamburger");



     barBtn.addEventListener("click",function(){
      navList.classList.toggle("show-nav__list")
     })

      modeBtn.addEventListener("click", function () {
        if (document.body.className != "light") {
          this.firstElementChild.src = "images/dark.svg";
        } else {
          this.firstElementChild.src = "images/light.svg";
        }
        document.body.classList.toggle("light");
      });

      window.addEventListener("scroll", function () {
        shrink();
      });

      function shrink() {
        if (scrollY > 1) {
          navbar.classList.add("navbar-shrink");
        } else {
          navbar.classList.remove("navbar-shrink");
        }
      }
      window.addEventListener("scroll", function () {
        toggleBacktop();
      });


      function toggleBacktop() {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          backtop.classList.add("backtop-show");
        } else {
          backtop.classList.remove("backtop-show");
        }
      }

      