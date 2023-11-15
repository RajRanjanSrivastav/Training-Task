
const randomGen=(id)=>{
 let para = ""
 let ele = document.getElementById(id);
 for(let i=0;i<30;i++)
 {
    para += (getRandomString())+" "; 
 }
 ele.innerText = para;
}

const getRandomString=()=>{
    
    let arr = ['this','is','car',"and", "or", "but", "because","Fred", "Jane", "Richard Nixon", "Miss America","loves", "hates", "sees", "knows", "looks for", "finds","man", "woman", "fish", "elephant", "unicorn","big", "tiny", "pretty", "bald",'this','is','car',"and", "or", "but", "because","Fred", "Jane", "Richard Nixon", "Miss America","loves", "hates", "sees", "knows", "looks for", "finds","man", "woman", "fish", "elephant", "unicorn","big", "tiny", "pretty", "bald"];

   
    let num = Math.floor(Math.random()*50)
    return  arr[num];
}