import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GiftGrid } from "./GiftGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    // "Samurai X",
    // "Dragon Ball",
  ]);

  const onAddCategory = (newCategory: string) => {
    if (
      categories
        .map((cat) => cat.toUpperCase())
        .includes(newCategory.toUpperCase())
    ) {
      alert("The category already exists");
      return;
    }
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories} categories={categories}
        onNewCategory={(value: string) => onAddCategory(value)}
      />

      {/* Listado de Gifs */}
      {categories.map((category) => (<GiftGrid key={category} category={category} />))}    </>
  );
};
