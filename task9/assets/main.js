let arr = [
  "https://cdn.pixabay.com/photo/2014/11/25/16/32/drop-545377_1280.jpg",
  "https://cdn.pixabay.com/photo/2012/02/24/16/59/swan-16736_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/01/06/23/03/sunrise-1959227_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/06/25/14/27/background-image-3497025_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/21/11/46/sunset-8331285_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/10/19/04/25/house-4560567_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
];

let cnt = 0;

const prev = (id) => {
  let slid = document.getElementById(id);
  console.log(slid);
  cnt--;
  if (cnt == -1) {
    cnt = arr.length - 1;
  }
  slid.classList.add("anim");
  slid.classList.add("leftTrans");
  slid.classList.remove("animout");
  setTimeout(() => {
    slid.classList.remove("anim");
    slid.classList.remove("leftTrans");
    slid.classList.add("animout");
    slid.style.backgroundImage = `url(${arr[cnt]})`;
  }, 1000);

  console.log(cnt);
};

const next = (id) => {
  let slid = document.getElementById(id);
  console.log(slid.style.backgroundImage);
  if (cnt == arr.length) {
    cnt = 0;
  }
  slid.classList.add("anim");
  slid.classList.add("rightTrans");
  slid.classList.remove("animout");
  setTimeout(() => {
    slid.classList.remove("anim");
    slid.classList.remove("rightTrans");
    slid.classList.add("animout");
    slid.style.backgroundImage = `url(${arr[cnt]})`;
  }, 1000);
  cnt++;
  console.log(cnt);
};
