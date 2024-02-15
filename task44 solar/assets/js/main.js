function disableBtn() {
  document.getElementById("submit").disabled = false;
  if (document.querySelector("#addressInfo").value === "") {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.background = "#6c757d";
    alert(
      "Address is mandatory to fill.Please Detect your location  click on detect button"
    );
  } else {
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.background = "#010F2E";
  }
}

function enableBtn() {
  document.getElementById("submit").disabled = false;
}

const unit = "Kwh";

function validate() {
  var submit = document.getElementById("submit");
  var cus = document.getElementById("customer").value;
  var ele = document.getElementById("electricity").value;
  var solor = document.getElementById("solor").value;
  var rof = document.getElementById("roof").value;
  var addinfo = document.getElementById("addressInfo").value;
  // var addinfo = document.getElementById("addressInfo").value === ""? false: true;
  var val19 = document.getElementById("color_mode").checked;
  var roofwithunit = rof / 100;
  var angenval = roofwithunit * 4 * 30 * 12;
  var angensolarval = solor * 4 * 30 * 12;
  var annualgenration = angenval * ele;
  var annualgensolar = angensolarval * ele;

  //document.getElementById('submit').disabled = true; //Disable at first
  if (rof !== "") {
    //disableBtn();

    document.getElementById("loc").innerHTML = addinfo;
    var roofvalue = (document.getElementById("sc").innerHTML =
      roofwithunit + " kWp");
    var anuualgen = (document.getElementById("ag").innerHTML =
      angenval + " kWh");
    var annualsaving = (document.getElementById("as").innerHTML =
      ' <i class="fas fa-rupee-sign"></i> ' +
      annualgenration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    if (sc < 10) {
      var expectedcost = (document.getElementById("ec").innerHTML =
        '<i class="fas fa-rupee-sign"></i> ' +
        (roofwithunit * 54000)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } else {
      var expectedcost = (document.getElementById("ec").innerHTML =
        ' <i class="fas fa-rupee-sign"></i> ' +
        (roofwithunit * 45000)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  } else {
    var solorcap = (document.getElementById("sc").innerHTML = solor);
    var anuualgen = (document.getElementById("ag").innerHTML =
      angensolarval + " kWh");
    var annualsaving = (document.getElementById("as").innerHTML =
      ' <i class="fas fa-rupee-sign"></i> ' +
      annualgensolar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    if (sc < 10) {
      var expectedcost = (document.getElementById("ec").innerHTML =
        '<i class="fas fa-rupee-sign"></i> ' +
        (solor * 54000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    } else {
      var expectedcost = (document.getElementById("ec").innerHTML =
        ' <i class="fas fa-rupee-sign"></i> ' +
        (solor * 45000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  }
  var investment = (document.getElementById("rv").innerHTML = cus);
}
var submit = document.getElementById("submit");
var inputs = document.querySelectorAll("input");
submit.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
  document.getElementById("customer").value = 0;
});

$(document).ready(function () {
  $("#color_mode").on("change", function () {
    colorModePreview(this);
    document.getElementById("electricity").value = " ";
    // document.getElementById('roof').value= " " ;
    document.getElementById("solor").value = " ";
    document.getElementById("customer").value = 0;
  });
});

function colorModePreview(ele) {
  if ($(ele).prop("checked") == true) {
    $("#solor-install").css("display", "block");
    $(".roof-top").css("display", "none");
  } else if ($(ele).prop("checked") == false) {
    $("#solor-install").css("display", "none");
    $(".roof-top").css("display", "block");
  }
}
