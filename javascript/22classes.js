class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet= () => {return `Say Hi to ${this.name}`}
}

let Hindi = new language1('Hindi','India')
undefined
Hindi
language1 {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi to Hindi'