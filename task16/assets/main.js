let char;
let name;
let pass;
let email;
let num;
let link;
let age;
let tellGen;

let emailLen;
let nameLen;
let passLen;
let ageLen;
let numberLen;
let linkLen;
let gender = false;
let out = "";

let eleTrg = document.getElementsByClassName("dataBox");

const nameVali = (e) => {
  // console.log(e.charAt(e.length-1));
  name = e;
  nameLen = e.length;
  char = e.charAt(e.length - 1);
  if (char != " ") {
    if (!isNaN(char)) {
      // console.log(char,"kjsflj");
      alert("please enter your name carefully");
    }
  }
};

// for password
const passVali = (e) => {
  passLen = e.length;
  pass = e;
};

// for email
const emailVali = (e) => {
  emailLen = e.length;
  email = e;
};

// for age
const ageVali = (e) => {
  ageLen = e.length;
  age = e;
};

// for gender
const genderVali = (e) => {
  if (!gender) {
    gender = true;
  }
  tellGen = e;
};

// for number
const noVali = (e) => {
  numberLen = e.length;
  num = e;
};

// for port
const portVali = (e) => {
  linkLen = e.length;
  link = e;
};

const show = (e) => {
  if (
    isNaN(char) &&
    nameLen > 2 &&
    passLen > 7 &&
    linkLen != 0 &&
    emailLen != 0 &&
    email.includes("@") &&
    ageLen != 0 &&
    numberLen != 0 &&
    gender
  ) {
    alert(`
           Your name is: ${name}
           Your email is: ${email}
           Your password is: ${pass}
           Your age is: ${age}
           Your gender is: ${tellGen}
           Your phone number is: ${num}
           Your portfolio link is: ${link}`);
  } else {
    alert("please fill  your details carefully");
  }
};




// for second page

function showData(){
  const params = (new URL(document.location)).searchParams;
  const name = params.get('name');
  const email = params.get('email');
  const pass = params.get('password');
  const tellGen = params.get('gender');
  const age = params.get('age');
  const num = params.get('phone_no');
  const link = params.get('port');
  eleTrg[0].innerHTML=`
       <p>Your name is: <span>${name}</span> </p>
       <p>Your email is: <span>${email}</span> </p>
       <p>Your password is: <span>${pass}</span></p>
       <p>Your gender is: <span>${tellGen}</span> </p>
       <p>Your age is: <span>${age}</span> </p>
       <p>Your phone number is: <span>${num}</span> </p>
       <p>Your portfolio link is: <span>${link}</span></p>`
}