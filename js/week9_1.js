var items=[
    ["Book",450,200],
    ['Facial Foam',6800,12],
    ['Noodle',2200,180]
];

var content=document.getElementById('content');
content.innerHTML=calculateSubtotal(items); //2.function call
var room=document.getElementById('rooms');
var rooms=[
    ['deluxe',65000,15],
    ['single',30000,7],
    ['luxury',80000,16]
]
room.innerHTML=calculateSubtotal(rooms);
//1.function defintion
function calculateSubtotal(item)
{
    var result='';
    var total=0;
    for(var row=0;row<item.length;row++){
       result+="<tr>";
       result+="<td>" + ( row+1 ) +"</td>";
        for(var col=0;col<item[row].length;col++)
        {        
            result+="<td>" + item[row][col] +"</td>";
            
        }
        total+=item[row][1]*item[row][2];
        result+="<td>" + item[row][1]*item[row][2] +"</td>";
       result+="</tr>";
    
    }
    result+="<tr><td colspan='4'>Total</td><td >"+ total+"</td></tr>";
    return result; //return values
}

function celciusToFah(celcius)
{
    var fah=(celcius*(9/5))+32;
    document.getElementById('temperature').innerHTML=fah;
}

celciusToFah(100);

function checkAvailabilty(total_rooms,booked_rooms)
{
    return total_rooms-booked_rooms;
}

document.getElementById('available_rooms').innerHTML="Available rooms "+checkAvailabilty(100,17);


function addTableRows(array1)
{
    var response='';
    for(var row=0;row<array1.length;row++)
    {
        response+="<tr>"
        for(var col=0;col<array1[row].length;col++){
        response+="<td>"+array1[row][col]+"</td>"
        }
        response+="</tr>"
    }
return response;    
}
document.getElementById('rooms').innerHTML=addTableRows(rooms);