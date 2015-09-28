/**
 * Created by Joe on 9/20/2015.
 */

var z = document.getElementById('sample');
var x = 0;
var y = 0;

$(document).ready(function(){
  $("button").click(function(){
    $(this).hide();
  });
});

function myFunction()
{
  document.getElementById("Q2").className += " addClass";
}

function checkName(){

  var name=document.forms["myForm"]["name"].value;

  if(name==null || name==""){
    alert("Name must be filled out");
    return false;
  }
}

function checkEmail(){

  var email=document.forms["myForm"]["email"].value;

  if(email==null || email==""){
    alert("Email must be filled out");
    return false;
  }
}

function checkPassword(){

  var password=document.forms["myForm"]["password"].value;

  if(password==null || password==""){
    alert("Password must be filled out");
    return false;
  }
}
function checkConfirm(){

  var confirm=document.forms["myForm"]["confirm"].value;

  if(confirm==null || confirm==""){
    alert("Confirm must be filled out");
    return false;
  }
}

function checkPC() {
  var password=document.forms["myForm"]["password"].value;
  var confirm=document.forms["myForm"]["confirm"].value;
  if (password != confirm) {
    alert("Password different then confirm");
    return false;
  }

}
function validateForm()
{
  return checkName()&checkEmail()&checkPassword()&checkConfirm()&checkPC();

}

