//RESUELVE LOS EJERCICIOS AQUI
//- [ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** 
//que devuelva un array con el cuadrado de cada uno de los elementos.

let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
    let arrResult = numbers.map(n => n ** n);
    console.log(arrResult);
    return arrResult;
}

// - [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], 
// generar un segundo array que consiga generar de salida el resultado esperado.
//```
// [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
// ]
// ```

let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
let food = [

    {
        comida: "Pizza",
        texto: "Como soy de Italia, amo comer Pizza"
    },
    {
        comida: "Ramen",
        texto: 'Como soy de Japón, amo comer Ramen'
    },
    {
        comida: "Paella",
        texto: 'Como soy de Valencia, amo comer Paella'
    },
    {
        comida: "Entrecot",
        texto: 'Aunque no como carne, el Entrecot es sabroso'
    }

]

const result2 = foodList.map((item, i) => {
    return food[i].texto; // Usamos el índice para acceder al texto correspondiente
});

//const resultList = foodList.map(food => comida + texto)
// console.log(resultList)
// Usamos .map() para crear un nuevo array con la descripción de cada comida
// const resultList = foodList.map(item => {
//     // Buscamos el objeto correspondiente en el array de `food`
//     const foodItem = food.find(f => f.comida === item);
//     return foodItem ? `${foodItem.comida}: ${foodItem.texto}` : item;
// });
// console.log(resultList//)

////let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
//let food = ["Como soy de Italia, amo comer Pizza", "Como soy de Japón, amo comer Ramen", 'Como soy de Valencia, amo comer Paella', 'Aunque no como carne, el Entrecot es sabroso']
//foodList.map((food) =>  )



//Ejercicio 3. Dado el array staff, generar un segundo array staffDescriptions con el siguiente resultado.
// La variable result3 devuelve el array correcto
//  Resultado esperado
// /*
//   [
//     'Pepe es The Boss y le gusta leer y ver pelis',
//     'Ana es becaria y le gusta nadar y bailar',
//     'Luis es programador y le gusta dormir y comprar',
//     'Ana es becaria y le gusta nadar y bailar',
//     'Carlos es secretario y le gusta futbol y queso'
//   ]
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];
//const staffDescriptions = [
//    'Pepe es The Boss y le gusta leer y ver pelis',
//    'Ana es becaria y le gusta nadar y bailar',
//    'Luis es programador y le gusta dormir y comprar',
//    'Ana es becaria y le gusta nadar y bailar',
//    'Carlos es secretario y le gusta futbol y queso'
//]



const result3 = staff.map(person => {
    return `${person.name} es ${person.role} y le gusta ${person.hobbies.join(' y ')}`;
});

//  Ejercicio 4 - Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(n => n % 2 !== 0);

//console.log(result4)

// Ejercicio 5 - Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos 
//y saque una sentencia como la del ejemplo:
// ['Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!']

const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

const result5 = foodList2.filter(n => n.isVeggie === true).map(n => {
    if (n.name === "Tempeh") {
        return `Que rico ${n.name} me voy a comer!`
    }
    else {
        return `Que rica ${n.name} me voy a comer!`
    }
})
console.log(result5)

// Ejercicio 6 - Dado el array inventory, 
//devolver un array result6 con los nombres de los elementos que valgan más de 300 euros > El array inventory está declarado

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const result6 = inventory.filter(n => n.price > 300).map(n => n.name)
console.log(result6)

// Ejercicio 7 - Dado el array numeros3, 
//obten la multiplicación de todos los elementos del array en la variale result7 > La variable result7 devuelve el resultado correcto

const numeros3 = [39, 2, 4, 25, 62];
const result7 = numeros3.reduce((acc, current) => acc * current, 1)
console.log(result7)


// Ejercicio 8 - Concatena todos los elementos del array con reduce para que devuelva una sola frase en la variable result8 
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const sentenceElements = [
    'Me',
    'llamo',
    'Rubén',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
const result8 = sentenceElements.reduce((acc, current) => acc + " " + current)
console.log(result8)

// Ejercicio 9 - Obtener el monto total de los elementos que pertenecen a catergory "code" en la variable result9 
//> La variable result9 devuelve el resultado esperado
// Resultado --> 60
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];
const result9 = books.filter(n => n.category == "code").reduce((a, b) => a.price + b.price)
console.log(result9)
