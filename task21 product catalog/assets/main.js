let eleTrg = document.getElementById("item-cont");
let str = "";

fetch("assets/data.json")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((ans) => {
    console.log(ans);
    ans.map((e) => {
      str += `<div class="col-2">
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
