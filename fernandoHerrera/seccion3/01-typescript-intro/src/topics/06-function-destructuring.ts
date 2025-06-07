interface Product{
    description:string,
    price:number
}

interface TaxCalculationOptions{
    tax:number,
    products:Product[]
}

const phone:Product={
    description:'Nokia A1',
    price:150.0
}

const tablet:Product={
    description:'iPad Air',
    price:250.0
}

const shoppingCart:Array<Product> = [phone, tablet];
const tax:number=0.15;

const taxCalculation:(opciones:TaxCalculationOptions)=>[number, number]=({tax:impuesto, products:productos})=>{
    let total=0;
    productos.forEach(({price})=>total+=price)
    return [total, total*impuesto]
}


const [precio=0,impuesto=0] = taxCalculation({products:shoppingCart,tax})

console.log(`Subtotal: ${precio}, impuesto: ${impuesto}, total: ${precio+impuesto}`)