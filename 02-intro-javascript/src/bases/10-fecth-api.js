//Fetch API
const apiKey = 'fvtbTftW3lm71Zar5Zou9Q1P6mWuFZgm';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
    .then(response => response.json())
    .then( ({ data }) => {
        console.log(data.images.original.url)
        const imageUrl = data.images.original.url
        const image = document.createElement('img')
        image.src = imageUrl
        document.body.appendChild(image)
        
    })
    .catch(error => console.log(error));