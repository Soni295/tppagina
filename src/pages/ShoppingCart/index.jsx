import { useState } from "react";
import Layout from "../../components/layout";
import { CardConteiner } from "./components/CardConteiner";
import { useContext } from "react";
import { cartContext } from "../../useContext";

function Cart() {
  const { cart } = useContext(cartContext);

  return (
    <Layout>
      <div>
        <CardConteiner elements={cart} />
      </div>
    </Layout>
  );
}
export default Cart;
