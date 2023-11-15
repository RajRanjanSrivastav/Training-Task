const show = (id) =>{
    let data = document.getElementById(id);
    if(data.style.display == 'table-row')
    {
        data.style.display='none';
    }
    else{
        data.style.display= 'table-row';
        
    }
   
    console.log(id);
}