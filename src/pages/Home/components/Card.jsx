import { Link } from "react-router-dom";
import { PATHWITHID } from "../../../router/path";

export function Card({ id, img, category, title, price }) {
  return (
    <Link to={PATHWITHID.PRODUCT(id)}>
      <div className="Card">
        <img className="Card-img" src={img} />
        <p className="Card-category">{category}</p>
        <p className="Card-title">{title + "  " + id}</p>
        <p className="Card-price">${price}</p>
      </div>
    </Link>
  );
}
