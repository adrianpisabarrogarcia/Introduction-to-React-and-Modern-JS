//Funciones
function sayHi(name) {
    return `Hello, ${name}`;
}
//referencia a la función
console.log(sayHi)
console.log(sayHi("Carlos"))



//Funciones en variables
const sourname = function (sourname) {
    return `Sr./Sra. ${sourname}`;
}
console.log(sourname("Pisabarro"))

//Funciones landa
const sayHi2 = (name) => {
    return `Hello, ${name}`;
}
console.log(sayHi2("Carlos"))


//Funciones landa más cortas
//REF: https://latteandcode.medium.com/javascript-como-funcionan-las-comillas-invertidas-88c7fb209e9e
const sayHi3 = (name) => `Hello, ${name}`;
//Sin comillas invertidas
const sayHi4 = name => "Hello, " + name;

//Comillas invertidas para funciones 
//Otro ejemplo comillas invertidas `` y comillas normales ""''
let user = {
    name: 'asd',
    email: 'carlos@eldelcl.es',
};
// "Old syntax"
let userInfo = 'User info: ' + user.name + ' ' + user.email;
console.log(userInfo);
// "New syntax"
userInfo = `User info: ${user.name} ${user.email}`;
console.log(userInfo);

//Otra función fecha y landa
const sayHi5 = () => `Hello 👋`;
console.log(sayHi5())


//Con return
const getUser = () => {
    return {
        name: 'Carlos',
        email: 'carlos@carlos.es'
    }
}
//Sin return poneindo () para devolver un objeto
console.log(getUser().name)
const getUser2 = () => ({
        name: 'Adri',
        email: 'adri@adri.es'
})
console.log(getUser2().name)


// 2 EJERCICIOS

//1.Transformar a una función flecha
//2.Retornar un objeto implícito
function getUsuarioActivo(name){
    return {
        name: name,
        isActive: true
    }
}

const usuarioActivo = getUsuarioActivo("Pablo")
console.log(usuarioActivo)

//1. Resolción
const getUsuarioActivo2 = (name) => {
    return {
        name: name,
        isActive: true
    }
}
const usuarioActivo2 = getUsuarioActivo2("Pepito")
console.log(usuarioActivo2)

//2. Resolución
const getUsuarioActivo3 = (name) => ({
    name: name,
    isActive: true
})
const usuarioActivo3 = getUsuarioActivo3("Juan")
console.log(usuarioActivo3)






