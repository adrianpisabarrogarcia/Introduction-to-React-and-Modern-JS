//Import (export on heroes.js), con imp en Visual Studio Code
//Previamente para utilizarlo hay que poner un export a la función o la variable que quiero exportar
//import { heroes } from '../data/heroes.js';
import heroes, {owners} from '../data/heroes';

console.log(heroes)
console.log(owners)


//FIND ARRAY (Encuentra uno)
//Demasiado codigo
const getHeroById2 = (id) => {
    return heroes.find( heroe => {
        if (heroe.id === id){
            return true
        }else{
            return false
        }
    })
}

//Como debería de ser
const getHeroById = (id) => {
    return heroes.find( heroe => heroe.id === id )
}

console.log(getHeroById(1));
console.log(getHeroById(2));
console.log(getHeroById(3));

//FILTER ARRAY (Encuentra todos)
const getHeroesByOwner = ( owner ) => {
    return heroes.filter( heroes => heroes.owner === owner)
}
console.log( getHeroesByOwner("DC") )

