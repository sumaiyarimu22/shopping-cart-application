import { useSelector } from "react-redux";
import ProductAdd from "./ProductAdd";
import ProductItem from "./ProductItem";

const Products = () => {
  const initialProducts = useSelector((state) => state.productReducer);

  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* products container */}
        <div className="productContainer" id="lws-productContainer">
          {initialProducts.length > 0
            ? initialProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            : "No Product aviable, add a product here"}
        </div>
        <ProductAdd />
      </div>
    </main>
  );
};

export default Products;
