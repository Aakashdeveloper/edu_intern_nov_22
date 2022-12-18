for
while
do while
for of >> array
for in >> object
////
// iterate over the array and generate series of value
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Venice']
for(i=0;i<city.length;i++){
    console.log(city[i])
}
Delhi
Mumbai
Pune
London
Helsinki
Venice

///////////
var i = 10
while(i<5){
    console.log(i);
    i++
}

var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)


var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Venice']
for(mycity of city){
    console.log(mycity)
}