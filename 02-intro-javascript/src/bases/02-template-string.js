//Template String
const name = "Adrián"
const sourname = "Pisabarro"

//const fullName = name + " " + sourname
let fullName = ` Hola Mundo `
fullName = " Hola Mundo "
fullName = `
    ${ name }
    ${ sourname }
    ${ 1 + 1 }
`
//backticks ` `   (` y espacio en teclado español mac os)
console.log(fullName); 

function getHello(){
    return 'HelloWorld'
}
function getHello2(name){
    return 'Hello, ' + name;
}

console.log(`This is a greeting: ${ getHello() }`)
console.log(`This is another greeting: ${ getHello2(name) }`)
