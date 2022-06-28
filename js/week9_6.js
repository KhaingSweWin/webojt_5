var usd=document.getElementById('usd');
var mmk=document.getElementById('mmk')

usd.addEventListener('keyup',exchangeMoney)

function exchangeMoney(){
    var usdvalue=usd.value
    var mmkvalue=usdvalue*1850;
    mmk.value=mmkvalue;
}

var description=document.getElementById('description');
description.addEventListener('keyup',countCharacters)
//description.value="";

function countCharacters(){
    
    document.getElementById('message').innerHTML=description.value.length;
    if(description.value.length>=20)
    description.disabled=true;
    
}

var username=document.getElementById('username')
username.addEventListener('focus',displayMessage)
username.addEventListener('blur',displayTip)

function displayMessage()
{
    document.getElementById('msg1').innerHTML="Please add your email as username";
}
function displayTip()
{
    document.getElementById('msg1').innerHTML="You must add email";
}

var loginform=document.getElementById('login')
loginform.addEventListener('submit',check)

function check(event)
{
    event.preventDefault();
    var terms=document.getElementById('terms')
    if(!terms.checked)
    {
        alert("Agree to terms and condition?")
    }
}