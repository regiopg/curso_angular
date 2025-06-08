const addNumbers:(a:number, b:number)=>number = (a,b)=>{
    return a+b;
}

// const multiplicar:(firstNumber:number, secondNumber?:number, base:number=2)=>number=(primero, segundo, base)=>{
//     return primero * base;
// }

const multiplicar = (fN:number, sN?:number, base:number=2)=>{
    return fN*base;
}

const resultado:number = addNumbers(1,2);
const resultadoMultiplicar:number = multiplicar(5)

console.log({resultado, resultadoMultiplicar})

interface ICharacter{
    name:string,
    hp:number,
    showHP:()=>number
}

const healCharacter = (character:ICharacter, amount:number)=>{
    character.hp += amount;
}

const strider:ICharacter={
    name:'Aragorn',
    hp:50,
    showHP:function(){
        console.log(this.hp)
        return this.hp
    }
}

healCharacter(strider, 50)
healCharacter(strider, 30)
healCharacter(strider, 30)

strider.showHP();

export {};