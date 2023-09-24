import ProductAdd from "./ProductAdd";

const Products = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* products container */}
        <div className="productContainer" id="lws-productContainer"></div>
        <ProductAdd />
      </div>
    </main>
  );
};

export default Products;
