var btnadd=document.getElementById('btnadd');
var list=document.getElementById('list')
//var count=0;
//method 1
btnadd.onclick=(event)=>{
var username=document.getElementById('username');
console.log(username.value)
if(username.value.length>0)
{
    var li=document.createElement('li');
    li.innerHTML=username.value;
   // if(count%2==0)
    //li.classList.add('itemeven')
   // else
   // li.classList.add('itemodd')
    list.appendChild(li);
    username.value="";
   // count++;
}
var evenitems=document.querySelectorAll('li:nth-child(even)');
console.log(evenitems)
evenitems.forEach(element => {
    element.classList.add('itemeven')
});
}
//method 2
btnadd.addEventListener('click',function(){
    console.log("something")
    
})

//method 3
btnadd.addEventListener('click', process1);

function process1(){

}

//method 4
btnadd.onclick=process1;


var bntremove=document.getElementById('btnremove')
bntremove.onclick=()=>{
var li=list.firstElementChild;
if(li!=null)
{
    list.removeChild(li)
}
}

var options=document.getElementById('options');
options.onchange=function(){
    console.log('change '+options.value)
    var body=document.getElementsByTagName('body');
    console.log(body)
    for(var index=0;index<body.length;index++)
    {
        if(options.value==1)
        body[index].style.backgroundColor="red";
        else if(options.value==2)
        body[index].style.backgroundColor="yellow";
        else
        body[index].style.backgroundColor="blue";
    }
    
}