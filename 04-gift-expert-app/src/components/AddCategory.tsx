import { useState } from "react";

export const AddCategory = (
    { onNewCategory }: { onNewCategory: (value: string) => void }
) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onAddCategory = () => {
    if (inputValue.trim().length <= 1) {
      alert("The input cannot be empty");
      return;
    }
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAddCategory();
    }
  };

  return (
    <>
      <input
        id="new-category-input"
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={onAddCategory}>Agregar</button>
    </>
  );
};