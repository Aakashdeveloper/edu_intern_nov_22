var a = 10;
var b = 20
a+b
30

///////////
keyword nameoffunction(take parameters){
    return value
}

function add(a,b){
    return a+b
}
add(1,2)
3
add(23,56)
79
add('hii','JavaScript')
'hiiJavaScript'

function add(a,b,c){
    return a+b+c
}

add(1,2)
NaN
add(1,2,3)
6

///Rest es6
function add(...args){
    console.log(args)
}

add(1)
[1]

add(1,4,7,)
[1, 4, 7]


//es6 (arrow function)
let add = (a,b) => {return a+b}
add(1,2)
3