import { Link } from "react-router-dom";
import { PATHWITHID } from "../../../router/path";
import { useContext } from "react";
import { cartContext } from "../../../useContext";

export function Card({ id, img, category, title, price, deleteElementById }) {
  const { deleteProductById } = useContext(cartContext);

  return (
    <div className="Card">
      <Link to={PATHWITHID.PRODUCT(id)}>
        <img className="Card-img" src={img} />
      </Link>
      <p className="Card-category">{category}</p>
      <p className="Card-title">{title + "  " + id}</p>
      <p className="Card-price">${price}</p>
      <button
        onClick={() => {
          deleteProductById(id);
        }}
      >
        quitar
      </button>
    </div>
  );
}
