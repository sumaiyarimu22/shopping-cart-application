const ProductItem = () => {
  return (
    <>
      {/* product item  */}
      <div className="lws-productCard">
        <img
          className="lws-productImage"
          src={
            "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          }
          alt="product"
        />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">shoe</h4>
          <p className="lws-productCategory">category:</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price"></span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity"></span>
            </p>
          </div>
          <button
            className="lws-btnAddToCart"
            // disabled={lws_inputQuantity <= 0}
          >
            Add To Cart
          </button>
        </div>
      </div>
      {/* product item ends  */}
    </>
  );
};

export default ProductItem;
