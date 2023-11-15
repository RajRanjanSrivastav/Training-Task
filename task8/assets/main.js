const changeBtn = (id, crnid) => {
  let closebtn = document.getElementById(id);
  let prbtn = document.getElementById(crnid);

  if (prbtn.style.display == "block") {
    closebtn.style.display = "block";
    prbtn.style.display = "none";
  } else if (closebtn.style.display == "block") {
    prbtn.style.display = "block";
    closebtn.style.display = "none";
  }
};
