let str = "";

// edit
const edit = (e) => {
  let eleTrghtml = document.getElementById("cont");
  let inputELe = e.parentNode.previousElementSibling;
  let node = e.childNodes[0];
  let val = inputELe.value;
  console.log(val);
  str = "";

  if (node.classList[1] == "bi-pencil-square") {
    console.log(eleTrghtml.innerHTML);
    // console.log(node);
    // console.log(node.classList[1]);
    node.classList.remove("bi");
    node.classList.remove("bi-pencil-square");
    node.classList.remove("edit");
    // let first=node.classList[1];
    // console.log(first);
    // first.remove("bi-pencil-square"); // Remove mystyle class from DIV
    // console.log(node.classList[1]);
    node.classList.add("bi");
    node.classList.add("bi-check-circle-fill");
    node.classList.add("ok");
    // console.log(node);
    // <i class="bi bi-check-circle-fill ok"></i>

    inputELe.readOnly = false;
    console.log(val);
    // console.log(inputELe.value);
    inputELe.style.backgroundColor = "rgb(215, 215, 215, 0.4)";
    // e.parentNode.previousElementSibling
  } else {
    node.classList.remove("bi");
    node.classList.remove("bi-check-circle-fill");
    node.classList.remove("ok");
    node.classList.add("bi");
    node.classList.add("bi-pencil-square");
    node.classList.add("edit");
    inputELe.readOnly = true;
    inputELe.style.backgroundColor = "rgb(215, 215, 215, 0.1)";
   
    str = eleTrghtml.innerHTML;
  }

  // console.log(val);

  console.log(inputELe.value);
  // console.log(eleTrghtml.innerHTML);
  console.log(eleTrghtml.innerHTML);
  // console.log("edit me", e.parentNode.previousElementSibling);
};

// delete
const del = (e) => {
  // let ele = document.getElementById(id);
  console.log(e.parentNode.parentNode.parentNode);
  let node = e.parentNode.parentNode.parentNode;
  node.innerHTML = "";
  console.log(node.innerHTML);
  str = "";
};

// add task
const add = (cn) => {
  let contEle = document.getElementById("cont");
  let inputEle = document.getElementsByClassName(cn);
  // let val = cn.value();
  console.log(inputEle[0].value);
  console.log(contEle);

  str += `<div class="row mb-3" id="wrapper">
  <div class="col-1 text-end">
    <span class="cir" onclick="complete(this)"></span>
  </div>
  <div class="col-10 text-center task-list-cont">
    <input
      type="text"
      class="task-text"
      placeholder="inter your task here....."
      value="${inputEle[0].value}"
      readonly
    />
    <div>
      <span></span>
      <span onclick="edit(this)"
        ><i class="bi bi-pencil-square edit"></i
      ></span>
      <span onclick="del(this)"
        ><i class="bi bi-trash del"></i
      ></span>
    </div>
  </div>
</div>`;

  contEle.innerHTML = str;
  inputEle[0].value = "";
  // contEle.appendChild(str);
  // contEle[2].appendChild(str)
  // console.log(contEle.childNodes);
};

// completed task
const complete = (e) => {
  console.log();
  // let eleTrg=
  if (e.style.backgroundColor == "rgb(8, 181, 8)") {
    e.style.backgroundColor = "white";
    e.parentNode.nextElementSibling.childNodes[1].classList.remove("cross");
  } else {
    e.parentNode.nextElementSibling.childNodes[1].classList.add("cross");
    // e.parentNode.nextElementSibling.style.
    e.style.backgroundColor = "rgb(8, 181, 8)";
  }
};

const chk = (e) => {
  console.log(e);
};
