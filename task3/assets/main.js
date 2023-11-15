const show = () =>{
    let fdata = document.getElementById("navFirst");
    let sdata = document.getElementById("seconddata");
    let tdata = document.getElementById("tdata");
    let view = window.innerWidth || document.documentElement.clientWidth;

    if(fdata.style.display==="block")
    {
        fdata.style.display="none";
        sdata.style.display="block";  
        tdata.style.display="block";  
    }
    else{
        fdata.style.display="block"
        fdata.classList.add('col-12', 'order-2');
        fdata.classList.remove('mx-3', 'my-3');
        sdata.style.display="none";
        tdata.style.display="none";
    }
    console.log(sdata);
    console.log(fdata);
    console.log(view)
}


const check = () =>{
    let fdata = document.getElementById("navFirst");
    let sdata = document.getElementById("seconddata");
    let tdata = document.getElementById("tdata");

    if(window.innerWidth > 843)
    {
        fdata.style.display="block";
        fdata.classList.add('mx-3', 'my-3');
        fdata.classList.remove('col-12', 'order-2');
        sdata.style.display="block";  
        tdata.style.display="block";
    }
    if(window.innerWidth < 843 && window.innerWidth > 840)
    {
        if(fdata.style.display==="block")
        {
            fdata.style.display="none";
              
        }
    }

}

window.addEventListener('resize', check);


// for time
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("time").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();