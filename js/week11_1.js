var addbtn=document.getElementById('addbtn');
var newtask=document.getElementById('new-task');
var incomplete_task=document.getElementById('incomplete-tasks')
var complete_task=document.getElementById('completed-tasks')
addbtn.onclick=addItem;

function addItem()
{
var taskvalue=newtask.value;
if(taskvalue.length>0)
{
var checkbox=document.createElement('input')
checkbox.type="checkbox";
checkbox.onchange=change;
var li=document.createElement('li');

var label=document.createElement('label');
label.innerHTML=taskvalue;

var textbox=document.createElement('input')
textbox.type="text"

var editbtn=document.createElement('button')
var deletebtn=document.createElement('button')
editbtn.innerText="Edit"
deletebtn.innerText="Delete"
editbtn.classList.add('edit')
deletebtn.classList.add('delete')

editbtn.onclick=editTask;
deletebtn.onclick=deleteTask;

//li.innerHTML=taskvalue;
li.appendChild(checkbox)
li.appendChild(label)
li.appendChild(textbox)
li.appendChild(editbtn)
li.appendChild(deletebtn)
incomplete_task.appendChild(li)
newtask.value="";

}

function editTask()
{
    var li=this.parentNode;
    console.log(li)
    var textbox=li.querySelector('input[type=text')
    console.log(textbox)
    var label=li.getElementsByTagName('label');
    console.log(label)
    if(!li.classList.contains('editMode'))
    {        
        li.classList.add('editMode');
        console.log(textbox)
        textbox.value=label[0].innerText;
    }
    else{
        console.log('edit')
        li.classList.remove('editMode')
        label[0].innerText=textbox.value;
    }
    
}
function deleteTask(){
   console.log('delete')
   var ul=this.parentNode.parentNode;
   var li=this.parentNode;
   ul.removeChild(li)
}
function change()
{
    if(this.checked)
    {
    console.log("checked")
    var ul=this.parentNode.parentNode;
    var li=this.parentNode;
    ul.removeChild(li)
    complete_task.appendChild(li)
    console.log(ul);
    }
    else{
    console.log('unchecked')
    var ul=this.parentNode.parentNode;
    var li=this.parentNode;
    ul.removeChild(li)
    incomplete_task.appendChild(li)
    console.log(ul);
    }
    
}


}