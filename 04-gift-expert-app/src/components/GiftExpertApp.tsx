import { useState } from "react";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const onAddCategory = () => {
    if (inputValue.trim().length <= 1) {
      alert("The input cannot be empty");
      return;
    }
    if (categories.map(cat => cat.toUpperCase()).includes(inputValue.toUpperCase())) {
      alert("The category already exists");
      return;
    }
    setCategories([...categories, inputValue]);
    setInputValue("");
  };
  
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <input
        id="new-category-input"
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={onAddCategory}>Agregar</button>

      {/* Listado de Gifs */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
