console.log("external js file");
console.log("external js file.....")
console.log(document.getElementById('box1'));
document.getElementById('box1').innerHTML="<h2>Box1</h2>";
document.getElementById('box1').innerHTML+="Lorem ";
document.getElementById('box1').innerHTML+="Lorem.....";

var name="Tun Tun";
console.log(name);

{
    let email="tuntun@gmail.com";
    console.log("Name is "+name);
    console.log("Email is"+email);
   
}
const pi=3.1422;
console.log("pi value is"+pi);

var box1=document.getElementById('box1');
box1.innerHTML="<h2>"+name+"</h2>";
var age=20;
console.log(age+","+typeof(age));
var message=true;
console.log(message+','+typeof(message));


var box2=document.getElementById('box2');
var box3=document.getElementById('box3');


//for loop
//step1 initilization
//step2 end point condition and process if true
//step 3 step count
var list=document.getElementById('list');
var row1=document.getElementById('row1');

var images=['event1.png','event2.jpg','event1.png','event2.jpg']
for(var count=0;count<images.length;count++)
{
row1.innerHTML+="<div class='col'>";
row1.innerHTML+="<img src='image/"+ images[count]+"' class='img-fluid'></div>";
}