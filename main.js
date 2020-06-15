class HeaderTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="w3-container w3-padding-24">
    <a href="index.html" class="w3-left w3-button logo">Danyale  C. Walker</a>
    <a href="#contact" class="w3-right w3-button">Contact</a>
    <a href="about.html" class="w3-right w3-button">About</a>
    <a href="work.html" class="w3-right w3-button active">Work</a>
  </header>
    `;
  }
}

customElements.define('header-template', HeaderTemplate);

class FooterTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <hr>
    <footer class="w3-content w3-center" style="max-width:1300px" id="contact">
      <div class="w3-cell-row">
        <div class="w3-container w3-justify w3-third w3-cell-top">
          <p class="copyright">© Danyale C. Walker 2020<br>
            All rights reserved. <br><br>
            Made with <span class="heart">  &#10084; </span>in Brooklyn</p>
        </div>

        <div class="w3-container w3-justify w3-third  w3-cell-top">
          <p>Become A Friend:</p>
          <div class="email"><a href="mailto:danyalecw@gmail.com">
            Email</a></div>
            <div class="github"><a target="_blank" href="https://github.com/DanyaleCW">GitHub</a>
            </div>
              <div class="linkedin"><a target="_blank" href="https://www.linkedin.com/in/danyalecwalker">Linkedin</a>
                </div>
              <div class="codepen"><a target="_blank" href="https://codepen.io/danyalecw">CodePen</a>
                </div>
              <div class="twitter"><a target="_blank" href="https://twitter.com/DanyaleCWalker">Twitter</a>
              </div>
        </div>

        <div class="w3-container w3-justify w3-third w3-cell-top">
          <p>Contact me if you would like to create a website that converts clicks to leads and increases your bottom line.</p>
          <br>
          <p>Let's make something beautiful & profitable!</p>
        </div>
        
        <!-- <div class="w3-container w3-third w3-cell-top">
          <div class="work"><a href="index.html">Home</a>
          </div>
          <div class="work"><a href="work.html">Work</a>
          </div>
          <div class="about"><a href="about.html">About</a>
          </div>
        </div> -->

    </div>
    </footer>
    `;
  }
}


customElements.define('footer-template', FooterTemplate);

//PROJECTS

let present = document.getElementById("present");
present.addEventListener("click", function() {
  window.open("https://xd.adobe.com/view/346ccc60-7eed-4378-617a-fc2c6239bc93-425d/?fullscreen", "_blank")
});

let icecream = document.getElementById("icecream");
icecream.addEventListener("click", function() {
  window.open("https://codepen.io/danyalecw/full/ZPEraK", "_blank")
});

let port3 = document.getElementById("portfolio3");
portfolio3.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/Portfolio-V3/", "_blank")
});

let choco = document.getElementById("chocolate");
chocolate.addEventListener("click", function() {
  window.open("https://artboard.studio/present/5ebb22447b71d7001897ec6a/5eab867d49f5b20018d33d86", "_blank")
});

let port2 = document.getElementById("portfolio2");
portfolio2.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/Portfolio-V2/", "_blank")
});

let port1 = document.getElementById("portfolio1");
portfolio1.addEventListener("click", function() {
  window.open("https://danyalecw.github.io/First-Portfolio/", "_blank")
});

let bubbles = document.getElementById("bubbles");
bubbles.addEventListener("click", function() {
  window.open("https://codepen.io/danyalecw/full/VRmBjv", "_blank")
});

let surf = document.getElementById("surf");
surf.addEventListener("click", function() {
  window.open("https://xd.adobe.com/view/d600ac6c-3391-4676-7a54-beebee25e2e9-a031/?fullscreen", "_blank")
});

let wine = document.getElementById("wine");
wine.addEventListener("click", function() {
  window.open("https://spark.adobe.com/post/rgxNwKN6lnBYP/", "_blank")
});

// let women = document.getElementById("women");
// women.addEventListener("click", function() {
//   window.open("https://xd.adobe.com/view/480faa9c-a432-458c-6ea4-7c85f7632ba8-3e3e/?fullscreen", "_blank")
// });


//
// let surf = document.getElementById("surf");
// surf.addEventListener("click", function() {
//   window.open("https://walker-rumblr.herokuapp.com/", "_blank")
// });
//
// let wanda = document.getElementById('wanda');
// wanda.addEventListener("click", function() {
//   window.open("https://wandas-panel.herokuapp.com/admins/sign_in", "_blank")
// });
//
// let out = document.getElementById('out');
// out.addEventListener("click", function() {
//   window.open("https://out-of-office-nyc.herokuapp.com/", "_blank")
// });
