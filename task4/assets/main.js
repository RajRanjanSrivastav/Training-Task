const displayFun = () => {
  let p1 = document.getElementById("pop1");
  let p2 = document.getElementById("pop2");
  let p3 = document.getElementById("pop3");
  let load = document.getElementById("loder");

  setTimeout(() => {
    p1.style.display = "block";
    load.style.display = "none";
  }, 5000);

  setTimeout(() => {
    p1.style.display = "none";
    p2.style.display = "block";
  }, 7000);
  setTimeout(() => {
    p2.style.display = "none";
    p3.style.display = "block";
    // showHome();
  }, 10000);
  setTimeout(() => {
    showHome();
  }, 13000);
};

const showHome = () => {
  window.location.href = "welcome.html";
};
