
const person = {
    name: 'Adrian',
    sournames: 'Pisabarro García',
    years: 23,
    direction: {
        street: 'Calle de la paz',
        number: '12',
        city: 'Madrid',
    },
};

console.log(person);
//Copia por referencia 🤝
const person2 = person;
person2.name = 'Alberto';
console.log(person2);

console.log("***");

//Hacer un clon de un objeto por valor
const person3 = { ...person };
person3.name = 'Pedro';
console.log(person3);
console.log(person);
console.log("***");



//Posibles formas de imprimir un objeto 🔍
console.log(person);
console.table({ person });
//imprimir un valor de un obje  to
console.log(person.name);
console.log(person['name']);
console.log(person.direction.street);
//for in
for (const key in person) {
    console.log(key);
}
//for of
for (const key of Object.keys(person)) {
    console.log(key);
}

