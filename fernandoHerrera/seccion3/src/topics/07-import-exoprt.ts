import { type Product, taxCalculation ,tax} from './06-function-destructuring'
const shoppingCart:Product[]=[
    {
        description:'Huaweii',
        price:2250
    },
    {
        description:'Reloj Huaweii',
        price:1890
    }
];

const [subTotal, impuesto] = taxCalculation({products:shoppingCart,tax})

console.log(`Subtotal: ${subTotal}, Impuestos: ${impuesto}, total:${subTotal+impuesto}`)