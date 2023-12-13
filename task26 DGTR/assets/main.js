const show = (id,id2) => {
  console.log(id2);
  if(id2.classList.contains("bi-x"))
  {
    id2.classList.remove("bi-x");
    id2.classList.add("bi-list");
  }
  else{
    id2.classList.add("bi-x");
    id2.classList.remove("bi-list");
  }
  
  id.classList.toggle("show");
};

const switchTheme = (id) => {
  let eleTrg = document.querySelectorAll(".wrapper");

  console.log(id);
  // main section
  let eleMainTrg = document.querySelectorAll(".main");
  eleMainTrg[0].classList.toggle("dark");
  // console.log(eleMainTrg);

  // for circle start
  let circleEle = document.querySelectorAll(".circle");
  circleEle[0].classList.toggle("dark");
  circleEle[0].style.border = "2px solid white";
  // for circle end

  // for text content of about section start
  let TextContentEle = document.querySelectorAll(".content-box");
  TextContentEle.forEach((e) => {
    e.classList.toggle("dark");
    e.style.border = "2px solid white";
  });
  // for text content of about section end

  let swiperSlider = document.querySelectorAll(".mySwiper2");
  swiperSlider[0].classList.toggle("dark");

  // last slider start
  let lastSliderEle = document.querySelectorAll(".last-slider");
  lastSliderEle[0].classList.toggle("dark");
  // last slider end

  // for twitter class
  let twitterEleLight = document.querySelectorAll(".site-light");
  let twitterEleDark = document.querySelectorAll(".site-dark");
  // console.log(circleContentEle);

  if (id.classList.contains("bi-moon-fill")) {
    twitterEleLight.forEach((e) => {
      e.style.display = "none";
    });
    twitterEleDark.forEach((e) => {
      e.style.display = "block";
    });
    id.classList.remove("bi-moon-fill");
    id.classList.add("bi-brightness-high-fill");
  } else {
    twitterEleLight.forEach((e) => {
      e.style.display = "block";
    });
    twitterEleDark.forEach((e) => {
      e.style.display = "none";
    });
    id.classList.remove("bi-brightness-high-fill");
    id.classList.add("bi-moon-fill");
  }
  eleTrg[0].classList.toggle("dark");
};
