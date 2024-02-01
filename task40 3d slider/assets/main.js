// for small slider start
window.addEventListener("load", () => {
  var carousels = document.querySelectorAll(".carousel");

  for (var i = 0; i < carousels.length; i++) {
    carousel(carousels[i]);
  }
});

function carousel(root) {
  var figure = root.querySelector("figure"),
    nav = root.querySelector("nav"),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = "bfc" in root.dataset,
    theta = (2 * Math.PI) / n,
    currImage = 0;

  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  window.addEventListener("resize", () => {
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  });

  setupNavigation();

  function setupCarousel(n, s) {
    var apothem = s / (2 * Math.tan(Math.PI / n));

    figure.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
    for (i = 1; i < n; i++) {
      images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      images[i].style.transform = `rotateY(${i * theta}rad)`;
    }
    if (bfc)
      for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";

    rotateCarousel(currImage);
  }

  function setupNavigation() {
    nav.addEventListener("click", onClick, true);

    function onClick(e) {
      e.stopPropagation();

      var t = e.target;
      if (t.tagName.toUpperCase() != "BUTTON") return;

      if (t.classList.contains("next")) {
        let eleBtn = document.getElementById("nextBtn");
        eleBtn.click();
        currImage++;
      } else {
        let eleBtn = document.getElementById("prevBtn");
        eleBtn.click();
        currImage--;
      }

      rotateCarousel(currImage);
    }
  }

  function rotateCarousel(imageIndex) {
    figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  }
}
// for small slider end
