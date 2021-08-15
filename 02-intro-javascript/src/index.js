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