// gsap.to("#img-2", {
//   scrollTrigger: ".text_css", // start the animation when ".box" enters the viewport (once)
//   x: -500,
// });
gsap.registerPlugin(ScrollTrigger);
let tween1 = gsap.to("#img-1", { x: -100 }),
  st1 = ScrollTrigger.create({
    trigger: ".text_html",
    // start: "top center",
    // end: "+=500",
    animation: tween1,
    onEnter: () => {
      console.log("aya");
      document.getElementById("img-1").classList.remove("hidden");
      document.getElementById("img-2").classList.add("hidden");
      document.getElementById("img-3").classList.add("hidden");
    },
    onLeaveBack: () => {
      console.log("wapas se");
      // document.getElementById("img-1").classList.remove("hidden");
    },
  });
let tween2 = gsap.to("#img-2", { x: -100 }),
  st2 = ScrollTrigger.create({
    trigger: ".text_css",
    // start: "top center",
    // end: "+=500",
    animation: tween2,
    onEnter: () => {
      console.log("aya");
      document.getElementById("img-2").classList.remove("hidden");
      document.getElementById("img-1").classList.add("hidden");
      document.getElementById("img-3").classList.add("hidden");
    },
    onLeaveBack: () => {
      console.log("wapas");
      // document.getElementById("img-1").classList.remove("hidden");
    },
  });
let tween3 = gsap.to("#img-3", { x: -100 }),
  st3 = ScrollTrigger.create({
    trigger: ".text_js",
    // start: "top center",
    // end: "+=500",
    animation: tween3,
    onEnter: () => {
      console.log("aya");
      document.getElementById("img-3").classList.remove("hidden");
      document.getElementById("img-1").classList.add("hidden");
      document.getElementById("img-2").classList.add("hidden");
    },
    onLeaveBack: () => {
      console.log("wapas");
      // document.getElementById("img-1").classList.remove("hidden");
    },
  });

// console.log(st.animation); // tween


