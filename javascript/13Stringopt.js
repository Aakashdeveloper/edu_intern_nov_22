var city = "amSteRDam"
var city = "pAriS"

city.toUpperCase()
'AMSTERDAM'
city.toLowerCase()
'amsterdam'
city.length
9
city[0]
'a'
city[1]
'm'
city.charAt(0)
'a'
city.charAt(2)
'S'
city.charAt(20)
''

var a = "John"
undefined
var b = "john"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true
var city = "amSteRDam"
undefined
city.slice(1)
'mSteRDam'
city.slice(2)
'SteRDam'
city.slice(3)
'teRDam'

var city = "amSteRDam"
undefined
city.slice(2,6)
'SteR'
city.slice(1,4)
'mSt'
city.slice(0,-1)
'amSteRDa'
city.slice(0,-3)
'amSteR'
city.slice(2,-3)
'SteR'
city.slice(-3,2)
''
city.slice(-3)
'Dam'

var city = "amSteRDam"
city.charAt(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "pAriS"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = "    Nikita  "

var a = "    Nikita  "
undefined
a.length
12
a.trim()
'Nikita'
var a = "    Nikita"
undefined
a.trim()
'Nikita'
var a = "    Nikita .  "
undefined
a.trim()
'Nikita .'
a.replaceAll(' ','')
'Nikita.'

var a = "https://github.com/Aakashdeveloper/Edu_Ang_Sep_19"
var b = "https://github.com/Aakashdeveloper/Aug_Ui_eveng"


var a = "https://github.com/Aakashdeveloper/Edu_Ang_Sep_19"
undefined
a.split('/')
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'Edu_Ang_Sep_19']
a.split('/')[4]
'Edu_Ang_Sep_19'
var b = "https://github.com/Aakashdeveloper/Aug_Ui_eveng"
undefined
b.split('/')[4]
'Aug_Ui_eveng'
var a = "i am learning javascript"
undefined
a.split(' ')
(4) ['i', 'am', 'learning', 'javascript']

var a= 'javascript'
a.split('')
(10) ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

var a = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
a.toString()
'j,a,v,a,s,c,r,i,p,t'
a.toString().replaceAll(',','')
'javascript'