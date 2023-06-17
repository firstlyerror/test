let input=document.querySelector("input");
let ul=document.querySelector("ul");
let button=document.querySelector("button");
button.addEventListener("click",function(){

   
    if(input.value != ""){
         ul.innerHTML += `<li>${input.value}</li>`;
    input.value="";
    }else{
        alert("bos deyer qebul  edilmir")
    }
})
