import { useSelector } from "react-redux";
import ProductAdd from "./ProductAdd";
import ProductItem from "./ProductItem";

const Products = () => {
  const initialProduct = useSelector((state) => state);

  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* products container */}
        <div className="productContainer" id="lws-productContainer">
          {initialProduct.length > 0
            ? initialProduct.map((productItem) => (
                <ProductItem key={productItem.id} product={productItem} />
              ))
            : "No Product added, please ass a product"}
        </div>
        <ProductAdd />
      </div>
    </main>
  );
};

export default Products;
