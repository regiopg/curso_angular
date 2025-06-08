export class Person{
    constructor(
        public firstName:string='', 
        public lastName:string='',
        private address:string='Sin dirección'
    ){}
}

export class Hero extends Person{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string
    ){
        super(realName, 'Gotham');
    }
}

export class AntiHeroe{
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person
    ){
    }
}

const ironman = new Person('Marcos Piña', 'Monterrey, Nuevo León');
const batman = new Hero('Batman',43,'Bruce Wayne');
const person = new Person('Jason', 'Grason', 'Gotham')
const robin = new AntiHeroe('Robin',21,'Jason',person);
console.log(ironman)
console.log(batman)
console.log(person)
console.log(robin)