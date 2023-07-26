import { useEffect, useState } from "react";
import { CardConteiner } from "./components/CardConteiner";
import { GetAllProducts } from "../../services";
import Layout from "../../components/layout";

function Home() {
  const [elements, setElements] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    GetAllProducts().then((v) => {
      setElements(v);
    });
  }, []);

  function handlerFilter(event) {
    setFilter(event.target.value);
  }
  function handlerElements(products) {
    const search = filter.toLowerCase();
    return products.filter(
      (value) => value.title.toLocaleLowerCase().indexOf(search) !== -1,
    );
  }

  return (
    <>
      <Layout onChange={handlerFilter} value={filter}>
        <CardConteiner elements={handlerElements(elements)} />
      </Layout>
    </>
  );
}

export default Home;
