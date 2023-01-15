# Page 1

> List of city
* https://nodetestapi.onrender.com/location
> List of restaurant
* http://localhost:9310/restaurants
> Rest wrt to city
* http://localhost:9310/restaurant/3
> List of Meal Type
* http://localhost:9310/mealtype


# Page 2

> Restaurants wrt to mealType
* http://localhost:9310/restaurants?mealId=4
> Restaurants wrt to mealType & Cuisine
* http://localhost:9310/filter/1?cuisineId=5
> Restaurants wrt to mealType & Cost
* http://localhost:9310/filter/1?hcost=800&lcost=600
> Sort on basis of price
* http://localhost:9310/filter/1?hcost=600&lcost=100&sort=-1

# Page3

> Details of Restaurant
* http://localhost:9310/details/12
> Menu wrt to restaurant
* http://localhost:9310/menu/12


# Page 4
> Menu Details
* http://localhost:9310/menuItem
{
	"id":[5,9,12,14]
}
> Place Order
* http://localhost:9310/placeOrder (POST)
{
	"orderId" : 5,
	"name" : "Nikita",
	"email" : "nikki@gmail.com",
	"address" : "Hom 65",
	"phone" : 8934645457,
	"cost" : 391,
	"menuItem" : [
		89,34,23
	]
}

# Page 5
> List order
* http://localhost:9310/orders
> Order wrt to Email
* http://localhost:9310/orders?email=ankit@gmail.com
> Update payment details
* http://localhost:9310/updateOrder/5
{
	"status":"Delivered",
	"bank_name":"SBI",
	"date":"16/01/2023"
}
> Delete orders
* http://localhost:9310/deleteOrder/63c3aa5d33695db289869eea