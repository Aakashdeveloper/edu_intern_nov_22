Array is a collection homeogenious as well as hetrogenious datatype

var a = ["hii","heelo","test","biee"] >>> Array of string
var b = [4,45,343,56,34,234] >> Array of number
var c = [true,false,false,true] >> Array of number

var d = ["#5",4353,true,false,434,"gfdgd"]

var city = ["Delhi","Mumbai","Pune","London"]

city.length
4
city[0]
'Delhi'
city[city.length-1]
'London'
city.push('Helsinki')
5
city
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki']
city.push('Venice')
6
city
(6) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Venice']

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Venice']
undefined
city.pop()
'Venice'
city
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki']
city.pop(2)

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Venice']
undefined
city.pop()
'Venice'
city
(5) ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki']
city.pop(2)
'Helsinki'
city.pop(10000)
'London'

var city = ["Delhi","Mumbai","Pune","London"]
city.unshift('insburg')
5
city
(5) ['insburg', 'Delhi', 'Mumbai', 'Pune', 'London']
city.shift()
'insburg'
city
(4) ['Delhi', 'Mumbai', 'Pune', 'London']

push > add in the end of Array
unshift >> add value in the beginning of array
pop > remove the last value
shift > remove the first value

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Venice']

city.slice(2,5)
(3) ['Pune', 'London', 'Helsinki']
city.slice(2)
(4) ['Pune', 'London', 'Helsinki', 'Venice']

city.splice(startIndex,deleteCount,values)

var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Venice']

//do not remove value just add on index 3
city.splice(3,0,'Dubai','Boston') 

//remove 2 values on index number 2
city.splice(2,2)

//remove 1 values on index number 3 and add 2 values
city.splice(2,1,'Pune','Stockholm')


var city = ['Delhi', 'Mumbai', 'Pune', 'London', 'Helsinki', 'Venice']

city.indexOf('Delhi')
0
city.indexOf('London')
3
city.indexOf('Dubai')
-1
city.indexOf('Inssburg')
-1

var a = "Hii"
var b = ["Hiii"]
Array.isArray(a)
false
Array.isArray(b)
true