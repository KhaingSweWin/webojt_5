var employee={
    name:"David",
    age:30,
    position:"pm",
    dept:"SE",
    started_year:2008,
    check:function(){
        return 2022-this.started_year;
    }
}
console.log(employee.name);
var box1=document.getElementById('box1');
box1.innerHTML="<h2>"+employee.name+"</h2>";
box1.innerHTML+="<h2>"+employee.age+"</h2>";
box1.innerHTML+="<h2>"+employee.position+"</h2>";
box1.innerHTML+="<h2>"+employee.dept+"</h2>";
box1.innerHTML+="<h2>"+employee.check()+"</h2>";
//object
for (var key in employee) {
    console.log(employee[key])
}
//foreach for array
var items=['cocacola','orange','sprite'];
items.forEach(function(item) {
    console.log(item)
});
console.log("for of");
//for of (array)
for (const x of items) {
    
    console.log(x);
}

// array containing student objects(5)
//student:name,major,year,email
var students=[
    {
        name:"Thiri",
        major:"IT",
        year:"Second Year",
        email:"thiri@gmail.com"
    },
    {
        name:"Thiri Aye",
        major:"Civil",
        year:"Second Year",
        email:"thiri@gmail.com"
    },
    {
        name:"Thit Htoo",
        major:"Mech",
        year:"Fifth Year",
        email:"thiri@gmail.com"
    }
]
var row=document.getElementById('student')
var result="";
var col=0;
students.forEach(student => {
    if(col%2==0) {
        result+="<div class='col-md-4 bg-danger text-light'>"; 
    }  
    else{
        result+="<div class='col-md-4 bg-primary text-light'>";  
    } 
     
    for (const key in student) {
        result+="<p>"+key+":"+student[key]+"</p>";
    }
    result+="</div>";
    col++;
});
row.innerHTML+=result;

//for loop
//1. initilization (starting point)
//2.condition (end point)
//3.increase step

//while loop
var index=0;
while(index<items.length)
{
    if(index%2==0)
    {
        console.log(items[index])
    }
    else{
        console.log("Odd room")
    }
     
    index++;
}

var count=0;
do{
    console.log(students[count])
    count++;
}while(count>students.length)

//condition
//if or switch--case

