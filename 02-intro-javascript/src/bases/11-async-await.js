//Async - Await
//La declaración de función async define una función asíncrona, la cual devuelve un objeto AsyncFunction.

const getImage = async() => {
    try{

        const apiKey = 'fvtbTftW3lm71Zar5Zou9Q1P6mWuFZgm';
        const respuesta = await fetch(`https://ASDapi.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        //gracia a await, se espera a que la promesa se resuelva
        //y se ejecuta la siguientes líneas de código, código asincrono
        const { data } = await respuesta.json();

        console.log(data)
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)
    
    } catch(error){
        console.error(error)
    }
}

getImage()