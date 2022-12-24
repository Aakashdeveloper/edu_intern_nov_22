function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () => {
        return `Say Hi to ${name}`
    }
}

let Hindi = new language('Hindi','India')
Hindi
language {name: 'Hindi', country: 'India', greet: ƒ}
Hindi.greet()
'Say Hi to Hindi'

let france = new language('France','French')
france
language {name: 'France', country: 'French', greet: ƒ}