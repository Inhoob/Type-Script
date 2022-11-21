import React from "react";
import Item from "../models/item";
interface ShoppingListProps {
  items: Item[];
}
export default function ShoppingList({ items }: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>shoppinglist</h1>
      <ul>
        {items.map((el) => (
          <li key={el.id}>
            {el.product}-{el.quantity}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
