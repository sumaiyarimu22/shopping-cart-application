import { useState } from "react";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(
    parseFloat(product.lws_inputQuantity)
  );

  const handleAddCartQ = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      return;
    }
  };

  return (
    <>
      {/* product item  */}
      <div className="lws-productCard">
        <img
          className="lws-productImage"
          src={product.lws_inputImage}
          alt="product"
        />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{product.lws_inputCategory}</h4>
          <p className="lws-productCategory">{product.lws_inputName}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{product.lws_inputPric}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{quantity}</span>
            </p>
          </div>
          <button className="lws-btnAddToCart" onClick={handleAddCartQ}>
            Add To Cart
          </button>
        </div>
      </div>
      {/* product item ends  */}
    </>
  );
};

export default ProductItem;
