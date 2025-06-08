const skills:string[] = ['Bash','Counter','Healing'];

interface IPersonaje{
    name:string,
    hp:number,
    skills:Array<string>,
    hometown?:string
}

const strider:IPersonaje = {
    name:'Strider',
    hp:100,
    skills:['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';

console.table(strider)

export {};