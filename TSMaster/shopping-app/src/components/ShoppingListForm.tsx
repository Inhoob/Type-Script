import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}
//그런데 form을 사용할 땐 useState를 활용하는게 더 정석적이다.
function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = productInputRef.current!.value; //optionalChaning은 undefined가 나올수있지만 !를 쓰면 반드시 있어야함(string으로 고정)
    const quantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, quantity);
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="product이름을 입력하세요" ref={productInputRef}></input>
      <input type="number" min={0} ref={quantityInputRef}></input>
      <button type="submit">ADD ITEM</button>
    </form>
  );
}

export default ShoppingListForm;
