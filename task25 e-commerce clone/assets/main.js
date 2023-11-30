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
  })
  .then(() => {
    let itemClick = document.querySelectorAll(".item-click");

    console.log(itemClick.length);

    // woking on ajax

    const xhr = new XMLHttpRequest();
    //open
    xhr.open("GET", "assets/ethnic.json", true);

    // onloaad

    xhr.onload = function () {
      let data = JSON.parse(xhr.responseText);
      console.log(data, "outer data");
      console.log(itemClick, "outer data");
      itemClick.forEach((element) => {
        console.log(element);
        element.addEventListener("click", () => {
          console.log(element, "ele");
          let holder = "";
          let contChange = document.getElementById("all-content");
          console.log(data, "data");
          data.map((e) => {
            console.log("andar");
            let sellprice = (e.showPrice * e.offer) / 100;
            holder += `
            <div class="col-2 mt-5 m-2 ">
              <div class="row mt-5 flex-column">
                <div class="col box-cont">
                  <div class="box" style=" background-image: url(${e.img});"></div>
                  <p class="rating-cont">${e.rating} <i class="bi bi-star-fill rating"></i> | ${e.number}</p>
                </div>
                <div class="col ms-2">
                  <p class="p-0 m-0 mt-2">${e.brand}</p>
                  <p class="p-0 m-0" style="font-size: 0.8rem">
                    ${e.type}
                  </p>
                  <p class="price">
                    <span class="fw-bold"> Rs. ${sellprice}</span> <span style="font-size:12px; text-decoration: line-through;">Rs. ${e.showPrice}</span>
                    <span style="font-size: 12px; color: red;">(${e.offer}% OFF)</span>
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
          `;
          });

          contChange.innerHTML = holder;
        });
      });
      console.log(itemClick);
      console.log(data, "last");
    };

    xhr.send();
  });


