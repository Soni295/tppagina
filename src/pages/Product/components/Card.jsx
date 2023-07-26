import { useContext } from "react";
import { cartContext } from "../../../useContext";

export function Card({ id, img, category, title, price }) {
  //cartContext
  const { addProduct } = useContext(cartContext);

  return (
    <div className="Card">
      <img className="Card-img" src={img} />
      <p className="Card-category">{category}</p>
      <p className="Card-title">{title + "  " + id}</p>
      <p className="Card-price">${price}</p>
      <button
        onClick={() =>
          addProduct({
            id,
            img,
            category,
            title,
            price,
          })
        }
      >
        {" "}
        agregar{" "}
      </button>
    </div>
  );
}
