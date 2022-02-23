//Arrays, Arreglos

//const names = ["Carlos","Javi","Jon","Aitor"];
const names = new Array(100); //no se recomienda a no ser que tengas un tamaño definido, sino lo haces con []
names.push("Alexis");
console.log(names);


const sournames = []
sournames.push("Pisabarro") //pos: 0 
sournames.push("García") // pos: 1
console.log(sournames)
console.log(sournames.length)

//no es recomendable utilizar el push porque accede al objeto principal
//los arrays son objetos en js
const levels = [1,2,3,4]
let levelsPlus = levels
levelsPlus.push(5)
console.log(levels)
console.log(levelsPlus)
console.log("Hola mundo")



const people = new Array(); // ❌
const people2 = []; // ✅

//heredar un array 👨‍👨‍👧‍👦
const newLevels = [0,...levels,5,6,7,8,9,10];
console.log(newLevels)

//map -> crea un nuevo array con los resultados de la función
const newNewLevels = newLevels.map(function(number){
    //necesita un callback, si no lo pondríamos tendriamos todo undefined
    return number * 2
})
console.log(newNewLevels)

