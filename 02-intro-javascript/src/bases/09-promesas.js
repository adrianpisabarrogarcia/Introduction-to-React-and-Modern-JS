//Promesas
//Yo voy a prometer a mi jefe que tal trabajo estará para la tarde
//Podrá estar o no pero siempre se lo tendrás que notificar

import { getHeroById, getHeroesByOwner } from "./bases/08-import-export-find-filter-array"

//Resolve cuando es existosa
//Reject cuando no es exitosa

/*
const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //console.log('is executed 2 seconds later')
        //resolve()

        const hero = getHeroById(2)
        const heroes = getHeroesByOwner("DC")
        //console.log(heroe)
        resolve(hero)
        reject("El heroe no existe")
    }, 2000)
})


//then cuando se ha hecho correctamente
//catch si algo ha ido mal
//finally -> lo ejecuta si o si
promise.then( (hero) => {
    console.log("Then de la promesa")
    console.log('hero: ', hero)
})
.catch( err => console.warn( err ))

*/



const getHeroByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //console.log('is executed 2 seconds later')
            //resolve()
    
            const hero = getHeroById(id)
            const heroes = getHeroesByOwner("DC")
            
            //codigo viejo
            /*
            if (hero){
                resolve(hero)
            }else{
                reject("El heroe no existe")
            }
            */
            
            //codigo nuevo: operador condicional ternario
            hero ? resolve(hero) : reject("El heroe no existe")
        }, 2000)
    })
}

getHeroByIdAsync(4123)
    .then( console.log )
    .catch( console.warn )
    //no hace falta pasar el unico parametro