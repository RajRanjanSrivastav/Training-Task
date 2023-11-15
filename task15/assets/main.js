
let limit = 11;
let eleTrg = document.getElementById('display');
let showMess = document.getElementById('mess');
function add(){
    let val = parseInt(eleTrg.value);
    if(val<limit)
    {
        val+=1;
        showMess.innerText=""
    }
    else{
        showMess.innerText="Value can't go beyond the limit"
    }
    eleTrg.value=val;
}
function sub(){
    let val = parseInt(eleTrg.value);
    if(val>0)
    {
        val-=1;
        showMess.innerText=""
    }
    else{
        showMess.innerText="Value can't go in negative"
    }
    
    eleTrg.value=val;
}
