//Desestructuración de Objetos

const characters = ['Goku', 'Vegeta','Ibai']

console.log(characters[0])
console.log(characters[1])
console.log(characters[2])

//Refactor F2 (Windows) & Fn + F2 (Mac)
const [ , , char1 ] = characters
console.log( char1 )

const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()
console.log(letters, numbers)


//Exercise
//1. El primer valor del arr se llamará name
//2. Se llamara setName

const useState = ( value ) => {
    return [ value, () => { console.log("hello world ❤️!")} ]
}

const [name, setName] = useState('Goku for example')
//Mal lo de abajo
//console.log(arr)
//console.log(arr[1]())
console.log(name)
setName()