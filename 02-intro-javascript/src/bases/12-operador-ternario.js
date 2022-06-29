//OPERADOR condicional TERNARIO
const active = true
let message = ''

//Operador if
if (active)
    message = 'Active'
else
    message = 'Inactive'
console.log(message) //Devuelve 'Active'

//Operador Ternario
message = active ? 'Active' : 'Inactive' //Devuelve 'Active'
message = !active ? 'Active' : 'Inactive' //Devuelve 'Inactive'
message = active && 'Active' //Devuelve 'Active' si es true
message = !active && 'Active' //Devuelve false
