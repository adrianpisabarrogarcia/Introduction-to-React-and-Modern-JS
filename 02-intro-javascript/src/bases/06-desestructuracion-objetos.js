//Desestructuración
//Asignación Desestructurante


const person = {
    name: 'Carlos',
    age: 30,
    key: 'Ironman',
    range: 'TechIT'
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
console.log(age)
console.log(key)


const useContext = ( {name, age, range = 'Tech'} ) => {
    //console.log(name, age, range)

    return{
        nameKey: name,
        ageKey: age,
        latlng: {
            lat: 40.416775,
            lng: -3.703790
        }
    }
}

const { nameKey, ageKey, latlng:{lat, lng} } = useContext(person)

console.log(nameKey, ageKey)
//Mal -> console.log(latlng)
console.log(lat, lng)