var swiper1 = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});

// fetch data by json
let eleTrg = document.getElementById("item-cont");
let str = "";

fetch("assets/data.json")
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((ans) => {
    // console.log(ans);
    ans.map((e) => {
      str += `<div class="col-2 item-click">
        <div class="row flex-column box-container">
          <div class="col">
            <div class="img-container" style="background-image: url(${e.img});"></div>
          </div>
          <div class="col text-content text-center">
            <p>
              ${e.type} <br />
              <span class="h3">${e.offer}</span> <br />
              shop now
            </p>
          </div>
        </div>
      </div>`;
    });
    eleTrg.innerHTML = str;
  });

// woking on ajax
const xhr = new XMLHttpRequest();
//open
xhr.open("GET", "assets/allitems.html", true);

// onloaad
xhr.onload = function () {
  let itemClick = document.getElementsByClassName("box-container");

  for (let item of itemClick) {
    // console.log(item);
    item.addEventListener("click", () => {
      alert("ghjk");
      let contChange = document.getElementById("all-content");
      contChange.innerHTML = `<div class="row mt-5">
      <div class="col-2 mt-5">
        <div class="row mt-5 flex-column">
          <div class="col box-cont">
            <div class="box"></div>
            <p class="rating-cont">4.3 <i class="bi bi-star-fill rating"></i> | 24K</p>
          </div>
          <div class="col ms-2">
            <p class="p-0 m-0 mt-2">KALINI</p>
            <p class="p-0 m-0" style="font-size: 0.8rem">
              kurta with trouser with dupata
            </p>
            <p class="price">
              <span class="fw-bold"> Rs. 850</span> <span style="font-size:12px; text-decoration: line-through;">Rs. 3699</span>
              <span style="font-size: 12px; color: red;">(77% OFF)</span>
            </p>
          </div>
          <div class="col">
            <button class="mainbtn" style="width: 100%">Add To Cart</button>
          </div>
          <div class="col">
            <button class="mainbtn" style="width: 100%">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>`;
    });
  }
  // console.log(itemClick);
  let data = xhr.responseText;
  // console.log(data);
};

xhr.send();
