function validate() 
{
var username=document.getElementById("username").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var phone=document.getElementById("phone").value;
if(username=="admin" || email == "u@i.ua" || password =="user" || phone=="0734154644"){
    alert("login succesfully");
    return false;
}
//else if (username == username[0].toUpperCase() || email === "u@i.ua" || password === "user" || phone === "0734154644") {
   // alert("login success");
   // return false;
 //} 
else{
    alert('login failed');
}
}