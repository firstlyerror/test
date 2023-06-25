const form=document.querySelector("form");
const Name=document.querySelector("#Name");
const Surname=document.querySelector("#Surname");
const Age=document.querySelector("#Age");
const Email=document.querySelector("#Email");
const Password=document.querySelector("#password");
const checkbox=document.querySelector("#checkbox");
const btn=document.querySelector("button");


form.addEventListener("submit", function(event){
    event.preventDefault()
    let isvalid=true;
   

    if(Name.value==""){
            document.querySelector("#Nameerror").innerText="Can not be Empty!";
            isvalid=false;
        }

    if(Surname.value==""){
            document.querySelector("#Surnameerror").innerText="Can not be Empty!";
            isvalid=false;
        }
 
        
    
    var isChecked = checkbox.checked;
  
    if (isChecked) {
      
      isvalid=true;

    } else {
      console.log("Checkbox is not checked");
      isvalid=false;
      
    }
    
        
         if (Password.length > 8) {

        alert("parol 8 simvoldan az ola bilmez!");
        return;
    }


  

    
    if(isvalid){
    

        const newuser={
    username:Name.value,
    Surname:Surname.value,
    Age:Age.value,
    Email:Email.value,
    Password:Password.value,
    
}
console.log(newuser)
    }



})




