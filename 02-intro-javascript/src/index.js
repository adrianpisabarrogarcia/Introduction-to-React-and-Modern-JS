//Desestructuración
//Asignación Desestructurante


const person = {
    name: 'Carlos',
    age: 30,
    key: 'Ironman'
}

//En react la mayoría de veces utilizamos los const
const {name:name2} = person;
const {name, age, key} = person;


console.log(person.name)
console.log(person.age)
console.log(person.key)


console.log(name2)
//is deprecated: use destructuring assignment instead
console.log(name)

