let holdStr = "";
let holdBrckStr = "";
let arr = [];
let oper = "";
// let chkBrak = false;
// let brakPres = false;
// let closingBrk = false;
// let nextOpeBrak = false;
let operBrak;
let arrForBrak = [];
// -----------------------------------------------
const calculate = () => {
  let inputEle = document.getElementById("myText");
  // if (brakPres) {
  //   console.log(arrForBrak);
  //   let chkarr = parseInt(arrForBrak);
  //   console.log(chkarr);
  //   inputEle.value = parseInt(arrForBrak);
  // }

  let finalArr = holdStr.split(/[^0-9\.]+/);
  // console.log(finalArr);

  if (oper == "+") {
    inputEle.value = parseInt(finalArr[0]) + parseInt(finalArr[1]);
  } else if (oper == "-") {
    inputEle.value = parseInt(finalArr[0]) - parseInt(finalArr[1]);
  } else if (oper == "*") {
    inputEle.value = parseInt(finalArr[0]) * parseInt(finalArr[1]);
  } else if (oper == "/") {
    inputEle.value = parseInt(finalArr[0]) / parseInt(finalArr[1]);
  } else if (oper == "%") {
    inputEle.value = parseInt(finalArr[0]) % parseInt(finalArr[1]);
  }

  // inputEle.value= (chkstr) ;
};
// const calculateForBrk = (st) => {
//   let finalArr = holdBrckStr.split(/[^0-9\.]+/);
//   holdBrckStr = "";
//   console.log(finalArr);
//   console.log(oper);
//   let val;
//   if (oper == "+") {
//     val = parseInt(finalArr[1]) + parseInt(finalArr[2]);
//   } else if (oper == "-") {
//     val = parseInt(finalArr[1]) - parseInt(finalArr[2]);
//   } else if (oper == "*") {
//     val = parseInt(finalArr[1]) * parseInt(finalArr[2]);
//   } else if (oper == "/") {
//     val = parseInt(finalArr[1]) / parseInt(finalArr[2]);
//   } else if (oper == "%") {
//     val = parseInt(finalArr[1]) % parseInt(finalArr[2]);
//   }

//   console.log(val);
//   nextOpeBrak = true;
//   st.push(val);
//   return st;
// };

// function for setting the value of input filed

const addEle = (num) => {
  // console.log(typeof num);
  if (num == "+" || num == "-" || num == "*" || num == "/" || num == "%") {
    oper = num; //oper
  }
  if (num == "lb") {
    num = "(";
    brakPres = true;
    chkBrak = true;
  } else if (num == "rb") {
    num = ")";
    closingBrk = true;
  }
  // --------------------------------------------------------

  let inputEle = document.getElementById("myText");
  // if (brakPres) {
  //   holdBrckStr += num;
  // }
  holdStr += num;
  inputEle.value = holdStr;

  // operator for next bracket
  // if (nextOpeBrak) {
  //   if (num == "+" || num == "-" || num == "*" || num == "/" || num == "%") {
  //     operBrak = num; //oper
  //     arrForBrak.push(operBrak);
  //     nextOpeBrak = false;
  //   }
  // }

  //using stack
  // if (chkBrak) {
  //   if (closingBrk) {
  //     let ans = calculateForBrk(arrForBrak);

  //     console.log(arrForBrak);
  //     chkBrak = false;
  //     closingBrk = false;
  //   }
  // }
};

// for clear the input field
const clearInp = () => {
  let inputEle = document.getElementById("myText");
  holdStr = "";
  arr = [];
  inputEle.value = "0";
};

// let chkarr = []
