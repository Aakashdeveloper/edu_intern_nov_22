let firstName = "Michal";
let lastName = "Peter";

let sayHi = {
    firstName:'Zoe',
    lastName:'Lisa',
    greet:function(){
        return `SayHi to ${this.firstName} ${this.lastName}`
    }
}

console.log(sayHi.greet())
//without this
//SayHi to Michal Peter

//with this
//SayHi to Zoe Lisa