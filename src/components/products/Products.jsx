import ProductAdd from "./ProductAdd";
import ProductItem from "./ProductItem";

const Products = () => {
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
