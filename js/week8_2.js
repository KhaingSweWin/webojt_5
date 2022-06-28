var students=[
    ["David","david@gmail.com","Sg",'event1.png'],
    ["Hnin hnin","hnin@gmail.com",'Ygn','event2.jpg'],
    ['TunTun','tun@gmail.com','Mdy','event1.png']
];

var row1=document.getElementById('row1');
for(var row=0;row<students.length;row++)
{
    var colbox="<div class='col-md-4'>"
    for(var col=0;col<students[row].length;col++)
    {
      console.log(students[row][col]) ;
      colbox=colbox+"<p>"+students[row][col]+"</p>";
    }
    colbox+="</div>"
    row1.innerHTML+=colbox;
}
var row2=document.getElementById('row2');
for(var row=0;row<students.length;row++)
{
    var colbox="<div class='card col-md-4'>";
    colbox+="<img src='image/"+students[row][3]+"' class='card-img-top'>";
    colbox+="<h2 class='card-title'>"+students[row][0]+"</h2>";
    colbox+="<p class='card-text'>"+students[row][1]+"</p>";
    colbox+="<p class='card-text'>"+students[row][2]+"</p>";
    colbox+="</div>";
    row2.innerHTML+=colbox;
}

var unit_price=380;
var qty=36;
//var totalcost=unit_price*qty;
var tax=0.02;
//var taxamount=totalcost*tax;
var discount=500;
var actualcost=(unit_price*qty)+(unit_price*qty*tax)-discount;
console.log(actualcost)
var num1=1000;
var count=5;
console.log(num1*++count);
console.log("count is "+count)
var remainder=14%3;
console.log("remainder "+remainder)

var total=1400;
total/=700;

console.log(5+"item")