import { useState } from "react";
import "./App.css";
import Item from "./models/item";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as getId } from "uuid";
// function func<T>(x: T): T {
//   return x;
// }
// const func = <T,>(x: T): T => {
//   // TSX에서 화살표함수를 쓸 때는 generic에 ,를 써줘야함
//   return x;
// };

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string) => {
    setItems([...items, { id: getId(), product, quantity: 1 }]);
  };

  return (
    <div>
      <ShoppingListForm onAddItem={addItem}></ShoppingListForm>
      <ShoppingList items={items}></ShoppingList>
    </div>
  );
}

export default App;
