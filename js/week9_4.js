var cols=document.getElementsByClassName('box');
for(var index=0;index<cols.length;index++)
{
    if(index%2==0)
    {
        cols[index].classList.add('even');
    }
    else{
        cols[index].classList.add('odd')
    }
}
var listitems=document.querySelectorAll('li:nth-child(4)')
//console.log(listitems)
listitems.forEach(element => {
    element.classList.add('odditem')
});
var ul=document.querySelector('.list1');
var li=ul.children;
console.log(li[1])
var firstli=ul.firstElementChild;
console.log(firstli.nextElementSibling)

var row=document.querySelector('.row')
console.log(row.children)
var lastbox=row.lastElementChild;
console.log(lastbox)
lastbox.classList.add('last')

var div=document.createElement('div');
div.classList.add('col-md-3');
div.classList.add('odd')

var h2=document.createElement('h2');
h2.innerHTML="Added Box"
var h3=document.createElement('h3');
h3.innerHTML="Sub title"

var title=document.createElement('h2')
title.innerHTML="Title"

div.appendChild(h2)
div.appendChild(h3)
row.appendChild(div);
div.insertBefore(title,h3)
