var marks=[76,89,45,68,99];
//<50 : D
//50-60 : C
//60-75: B
//75-100:A
for (let mark of marks) {
    console.log(mark)
    if(mark<=50)
    console.log("Grade D");
    else if(mark>50 &&  mark<=60)
    console.log("Grade C")
    else if(mark>60 && mark<=75)
    console.log("Grade B")
    else if(mark>75 && mark<=100)
    console.log("Grade A")
    
}

var items=[0,1,0,0,1,0]; // 0 : full time employee, 1 : wages
for (const value of items) {
    console.log(value)
    switch(value)
    {
        case 0: console.log("Ful time emp");break;
        case 1:console.log("wages");break;
        default: console.log("default");
    }
    
}
var products=['gem','gold','18k','pt','gem','18k'];
//gem: 100000/120 => price per yway
//gold:100000/128 => price per yway
//18k: 100000/15=> price per gram
//pt:100000/18 => price per gram
for (const value of products) {
    switch(value){
        case "gem":console.log("price per yway is "+(100000/120).toFixed(2));break;
        case "gold":console.log("price per yway is "+(100000/128).toFixed(2));break;
        case "18k":console.log("price per yway is "+(100000/15).toFixed(2));break;
        case "pt":console.log("price per yway is "+(100000/18).toFixed(2));break;
    }
}

function calculatePrice(pk,pack,lb)
{
    price_pk=38000;
    price_lb=38000/120;
    total_lb=pk*120+pack*10+lb;
    return total_lb*price_lb;
}
console.log(calculatePrice(5,4,1));

var today=new Date();
console.log(today.getDate())
var birthday=new Date('1/5/2000'); //MM-dd-year
console.log(birthday)
var diff=today-birthday;
console.log(diff)
var age=new Date(diff)
console.log(age.getUTCFullYear()-1970)

var boxes=document.getElementsByClassName('box_title');
console.log(boxes)
for (const box of boxes) {
    box.style.backgroundColor="red"
    box.style.letterSpacing="5px"
    box.style.color="white"
}
var p=document.getElementsByTagName('p')
var li=document.getElementsByTagName('li');
for (const item of li) {
    console.log(item.textContent)
    if(item.textContent.indexOf('melon')!=-1)
    item.style.backgroundColor="yellow";        
}


