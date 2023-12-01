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
      str += `<div class="col-2 item-click" key="${e.id}">
      <div class="row box-container">
        <div class="col p-0 img-container" style="background-image: url(${e.img});">
          <p class="text-on-image mb-0">
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

    // console.log(itemClick.length);

    // woking on ajax

    const xhr = new XMLHttpRequest();
    //open
    xhr.open("GET", "assets/allWear.json", true);

    // onloaad
    xhr.onload = function () {
      let data = JSON.parse(xhr.responseText);
      // console.log(data, "outer data");          //just checking for data is geting or not
      // console.log(itemClick, "outer data");
      itemClick.forEach((element) => {
        // console.log(element);
        element.addEventListener("click", () => {
          let catgHeader = document.getElementById("category-header");
          catgHeader.style.display = "block";
          // console.log(element.getAttribute("key"), "ele"); //testing for the keys
          let key = element.getAttribute("key"); //hold the key value
          // console.log(key);
          let ans = data[key - 1].items; //hold the internal array in a variable for use loop on it
          // console.log(ans, "andar wala");
          let category = data[key - 1].category;
          console.log(category);
          catgHeader.innerHTML = `<div class="col"><p class="mb-2 fw-bold text-uppercase">${category}</p></div>
          <div class="col">
            <p>
              <span class="fw-bold text-uppercase">${category}</span>
              <span style="color: #959595">- ${ans.length} items</span>
            </p>
          </div>`;
          let holder = "";
          let contChange = document.getElementById("all-content");
          // console.log(data, "data");
          ans.map((e) => {
            // console.log(e, "andar");
            let per = Math.floor((e.showPrice * e.offer) / 100);
            let sellprice = e.showPrice - per;
            holder += `
            <div class="col-2 mt-4 m-2 ">
              <div class="row mt-4 flex-column">
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
      // console.log(itemClick);
      // console.log(data, "last");
    };

    xhr.send();
  });
