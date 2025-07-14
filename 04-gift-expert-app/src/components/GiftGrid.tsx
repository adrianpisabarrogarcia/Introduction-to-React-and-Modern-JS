import { useEffect, useState } from "react";
import { GifItem } from "./GiftItem";
import { getGifs, Gif } from "../helpers/getGifs";

export const GiftGrid = ({ category }: { category: string }) => {

  const [images, setImages] = useState<Gif[]>([]);

  // Para que solo se ejecute la función una vez al cargar el componente
  useEffect(() => {
    getGifs(category) 
      .then(gifs => setImages(gifs));
  }, [category]);

  return (
    <div key={category}>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
