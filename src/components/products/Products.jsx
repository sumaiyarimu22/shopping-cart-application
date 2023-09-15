// import { useSelector } from "react-redux";
import ProductAdd from "./ProductAdd";
import ProductItem from "./ProductItem";

const Products = () => {
  // const initialProducts = useSelector((state) => console.log(state));
  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* products container */}
        <div className="productContainer" id="lws-productContainer">
          <ProductItem />
        </div>
        <ProductAdd />
      </div>
    </main>
  );
};

export default Products;
