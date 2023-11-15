const goNext = (Nid, Cid) => {
  let data = document.getElementById(Nid);
  let cdata = document.getElementById(Cid);
  data.style.display = "block";
  cdata.style.display = 'none';
};

const goPrev = (Pid, Cid) => {
  let data = document.getElementById(Pid);
  let cdata = document.getElementById(Cid);
  data.style.display = "block";
  cdata.style.display = 'none';
};

const show = (cid,id1,id2,id3,id4) =>{
  document.getElementById(cid).style.display='block';
  document.getElementById(id1).style.display='none';
  document.getElementById(id2).style.display='none';
  document.getElementById(id3).style.display='none';
  document.getElementById(id4).style.display='none';
}

