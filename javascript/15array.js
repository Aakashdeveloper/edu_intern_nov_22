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