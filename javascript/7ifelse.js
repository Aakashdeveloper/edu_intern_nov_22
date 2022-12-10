if(condition){

}else{

}

var a = 10;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM1244:3 Number 10 is even

var a = 11;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM1253:5 Number 11 is odd


var a = 9;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisible by 3`)
}else{
    console.log(`Number ${a} is odd`)
}
VM1269:5 Number 9 is divisible by 3


///////Ternary operator
(single line if else)

condition ? if condition is true : if condition is false

var a = 10
a > 10 ? "Hiii":"Biie"
'Biie'

var a = 10
a == 10 ? "Hiii":"Biie"
'Hiii'


var a = 10
a > 10 ? a+1:a-1
9

var a = 10
a == 10 ? a+1:a-1
11