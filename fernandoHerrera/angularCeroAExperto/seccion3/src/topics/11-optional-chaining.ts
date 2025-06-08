export interface Passenger{
    name:string,
    children?:string[]
}

const passenger1:Passenger={
    name:'Marcos'
}

const passenger2:Passenger={
    name:'Fabiola',
}

const passenger3:Passenger={
    name:'Fabián'
}

const passenger4:Passenger={
    name:'Andrea'
}


passenger2.children=['Fabian','Andrea'];


const printChildren = (passenger:Passenger)=>{
    const howManyChildren = passenger.children?.length || 0
    console.log(`${passenger} has ${howManyChildren} kids`);
}

printChildren(passenger1);
printChildren(passenger2)