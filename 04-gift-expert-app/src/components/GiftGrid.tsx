import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GiftGrid = ({ category }: { category: string }) => {

  const [images, setImages ] = useState([]);

  // Para que solo se ejecute la función una vez al cargar el componente
  useEffect(() => {
    getGifs(category)
    .then(gifs => setImages(gifs));
  }, []);

  return (
    <div key={category}>
      <h3>{category}</h3>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
