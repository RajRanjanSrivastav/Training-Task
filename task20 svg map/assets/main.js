let eleName = document.getElementById('Cname');
document.querySelectorAll("path").forEach((e)=>{
    if(e.getAttribute("name")!=null)
    {
        e.addEventListener('mouseover',()=>{
            console.log(e.getAttribute("name"));
            eleName.innerText=e.getAttribute("name");
        })
    }
    // console.log(e.getAttribute("name"));
})


// document.querySelectorAll("path").addEventListener("click", myFunction)

// function myFunction(){
//     console.log("vbhnjmk");
// }