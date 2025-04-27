//Consultar a la api para traernos el Gif
export const getGifs = async (category: string) => {
    const API_KEY = "XXXXXXXXXXXXXXXXXXXXXX";
    const LIMIT = 2;
    const URL = `https://api.giphy.com/v1/gifs/search/?api_key=${API_KEY}&q=${category}&limit=${LIMIT}`;
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data.map(
        (img: {
            id: string;
            title: string;
            images: { downsized_medium: { url: string } };
        }) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        })
    );
    return gifs;
};