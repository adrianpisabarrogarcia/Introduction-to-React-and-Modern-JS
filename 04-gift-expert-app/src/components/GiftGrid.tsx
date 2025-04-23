import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GiftGrid = ({ category }: { category: string }) => {
  const [counter, setCounter] = useState(10);

  // Para que solo se ejecute la función una vez al cargar el componente
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <div key={category}>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
};
