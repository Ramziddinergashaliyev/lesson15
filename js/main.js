      let modeBtn = document.getElementById("mode-btn");

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

      let navbar = document.getElementById("navbar");

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

      let backtop = document.getElementById("backtop");

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