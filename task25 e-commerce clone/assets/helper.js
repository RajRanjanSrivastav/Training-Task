let holderItems = [];
let cartHolder = "";
let totamrp = 0;
let dismrp = 0;
let buymrp = 0;
// let track=0;
let totalEle = document.getElementById("totalMRP");
let disEle = document.getElementById("disMRP");
let buyEle = document.getElementById("buyPrice");

const loadItems = (id) => {
  let itemCartList = document.getElementById(id);

  console.log(localStorage.getItem("itemArr"));
  if (JSON.parse(localStorage.getItem("itemArr") != null)) {
    let parseData = JSON.parse(localStorage.getItem("itemArr"));
    parseData.map((e) => {
      holderItems.push(e);
    });
    // arrHolder.push(JSON.parse(localStorage.getItem("itemArr")));
    // console.log(JSON.parse(localStorage.getItem("itemArr")));

    holderItems.map((e) => {
      //   console.log(e);
      totamrp += parseInt(e.showPrice); //total mrp
      let per = Math.floor((e.showPrice * e.offer) / 100);
      dismrp += per; //discount mrp
      let sellprice = e.showPrice - per;
      //   track+=sellprice
      cartHolder += `<div class="card mt-2">
            <img
              src="../${e.img}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body pt-0" style="height: 200px">
              <p style="font-weight: 700">${e.brand}</p>
              <p>${e.type}</p>
              <div class="selcectSize">
                <p>
                  <span class="size me-3"
                    >Size: M
                    <span>
                      <i class="bi bi-caret-down-fill"></i></span></span
                  ><span class="qyt"
                    >Qyt: 1
                    <span> <i class="bi bi-caret-down-fill"></i></span
                  ></span>
                </p>
              </div>
              <p class="price">
                <span class="fw-bold">${sellprice}</span> <span style="font-size:12px; text-decoration: line-through;">Rs ${e.showPrice}</span>
                <span style="font-size: 12px; color: red;">(${e.offer}% OFF)</span>
              </p>
              <p>14 days return available</p>
            </div>
          </div>`;
    });
  } else {
    cartHolder = "";
    totamrp=0;
    dismrp=0;
  }

  //   console.log(track);
  totalEle.innerText = totamrp;
  disEle.innerText = dismrp;
  buyEle.innerText = totamrp - dismrp + 100;
  itemCartList.innerHTML = cartHolder;
  //   console.log("je");
};
// console.log(holderItems, "dusre page se");

// remove function
const eraseData = (id) => {
  localStorage.clear();
  loadItems(id);
};
