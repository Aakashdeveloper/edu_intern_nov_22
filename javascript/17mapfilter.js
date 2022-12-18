Map
> Map help to iterate over the data
> it always return the same length of output as input array
> it is use to apply the logics


var a = [4,5,6,34,54,12,37,36,58,7,32,76]
a.map((data) => {return data*2})
[8, 10, 12, 68, 108, 24, 74, 72, 116, 14, 64, 152]

var a = [4,5,6,34]
a.map((data) => {return `<p>${data*2}</p>`})
(4) ['<p>8</p>', '<p>10</p>', '<p>12</p>', '<p>68</p>']

a.map(() => {})


filter
> it help to filter out the value;
> it may or may not return same length of output as input
> it only return those value for which you output or condition is true

var a = [4,5,6,34,54,12,37,36,58,7,32,76]
a.filter((data) => {return data>30})
[34, 54, 37, 36, 58, 32, 76]

var a = [4,5,6,34,54,12,37,36,58,7,32,76]
a.map((data) => {return data>30})
[false, false, false, true, true, false, true, true, true, false, true, true]