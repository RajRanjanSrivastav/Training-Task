const show = (id) => {
  id.classList.toggle("show");
};

const switchTheme = (id) => {
  let eleTrg = document.querySelectorAll(".wrapper");

  // main section
  let eleMainTrg = document.querySelectorAll('.main');
  eleMainTrg[0].classList.toggle('dark');
  // console.log(eleMainTrg);

  // for circle
  let circleEle = document.querySelectorAll(".circle");
  let TextContentEle = document.querySelectorAll(".content-box");
  let swiperSlider = document.querySelectorAll(".mySwiper2");

  // last slider
  let lastSliderEle = document.querySelectorAll(".last-slider");

  // for twitter class
  let twitterEleLight = document.querySelectorAll(".site-light");
  let twitterEleDark = document.querySelectorAll(".site-dark");
  // console.log(circleContentEle);





  if (id.classList.contains("black")) {

    twitterEleLight.forEach(e => {
      e.style.display='block';
    });
    twitterEleDark.forEach(e => {
      e.style.display='none';
    });
    id.classList.remove("black");
    id.classList.add("white");
  } else {
    twitterEleLight.forEach(e => {
      e.style.display='none';
    });
    twitterEleDark.forEach(e => {
      e.style.display='block';
    });
    id.classList.remove("white");
    id.classList.add("black");
  }
  eleTrg[0].classList.toggle("dark");
  circleEle[0].classList.toggle("dark");
  circleEle[0].style.border = "2px solid white";
  TextContentEle.forEach((e) => {
    e.classList.toggle("dark");
    e.style.border = "2px solid white";
  });

  
  swiperSlider[0].classList.toggle("dark");
  // swiperSlider[0].style.border = "2px solid white";

  // last slider
  lastSliderEle[0].classList.toggle("dark");
  // lastSliderEle[0].style.border = "2px solid white";
};
