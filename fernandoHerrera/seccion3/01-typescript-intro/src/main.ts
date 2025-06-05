import './style.css'
import './topics/01-basic-types'
import { name, hpPoints, isAlive } from './topics/01-basic-types'; 

const app = document.querySelector<HTMLDivElement>('#app')!;
console.log(name, hpPoints, isAlive)
app.innerHTML = `Hola mundo`

console.log(`Hola mundo`)
