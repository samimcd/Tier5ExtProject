const samim = document.querySelector("#samim");
samim.addEventListener("submit", function(ext)
{
  var a=document.querySelector(".mail").value; 
  var atposition=a.indexOf("@");  
  var dotposition=a.lastIndexOf("."); 
  var password=document.querySelector("password");

  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=a.length)
  {
    var newTextEmail = document.createElement("pass");
    newTextEmail.innerText = "Please enter a valid email";
    var error1 = document.querySelector(".err-msg-1");
    error1.appendChild(newTextEmail);
    ext.preventDefault();
  }
   else {
     return false;
   } 
  {
    var password1 = document.createElement("pass");
    password1.innerText = "Please enter a valid password";
    var error2 = document.querySelector(".err-msg-2");
    error2.appendChild(password1);
    ext.preventDefault();
  } 
})