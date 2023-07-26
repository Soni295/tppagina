import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsById } from "../../services";
import Spinner from "../../components/Spinner";
import Layout from "../../components/layout";
import { Card } from "./components/Card";

function ProductsPage() {
  let { id } = useParams();

  const [element, setElement] = useState(null);
  useEffect(() => {
    getProductsById(id).then((product) => setElement(product));
  }, []);

  return (
    <Layout>{element === null ? <Spinner /> : <Card {...element} />}</Layout>
  );
}

export default ProductsPage;
