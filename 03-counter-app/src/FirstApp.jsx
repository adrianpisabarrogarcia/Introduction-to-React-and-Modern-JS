//rafc <- atajo para crear componentes

//import { Fragment } from "react"

const newMessage = 'Adrián' //<- esto es una variable que se usa en el componente
const newBoolean = true 
const newArray = [1,2,3,4,5,6,7,8,9]
const newObject = {
    message: "Hola Mundo",
    title: "Adrián P. G.",
}

const sayHello = (name) => `Hello ${name}!`


export const FirstApp = () => {
    //cuando tenga que volver a ejecutar para mostrar esta función,
    //vovlera a renderizar esta variable por eso no es recomedable usarla dentro de una función
    //sino que se debe usar en el componente (arriba ☝️)
    //const newMessage = 'Adrián' <- esto es una variable local que no se puede usar fuera de la función

    return(
        //<Fragment>
        <>
            <h2>First App</h2>
            <p>This is a paragraph 1</p>
            <p>This is a paragraph 2</p>
            <p>This is a paragraph 3</p>
            <p>This is a paragraph 4</p>
            <p>This is a paragraph 5</p>
            <p>This is a paragraph 6</p>
            <h1>{ 2 * 4 }</h1>
            <h1>{ newMessage }</h1>
            <h1>{ newBoolean }</h1>
            <h1>{ newArray }</h1>
            <code>{ JSON.stringify( newObject ) }</code>
            <h1>{ newObject.message }</h1>
            <h1>{ newObject.title }</h1>
            {/*
            comentario
            multilinea
            <h1>{ newObject.message }</h1>
            */}
            <h1 data-testid="test-title">{ sayHello('Adrián') }</h1>
        </>
        //</Fragment>
    )
}