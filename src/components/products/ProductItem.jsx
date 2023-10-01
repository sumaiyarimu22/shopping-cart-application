import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/action";

const ProductItem = ({ product }) => {
  const {
    lws_inputImage,
    lws_inputName,
    lws_inputCategory,
    lws_inputPrice,
    lws_inputQuantity,
  } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <>
      {/* product item  */}
      <div className="lws-productCard">
        <img className="lws-productImage" src={lws_inputImage} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{lws_inputName}</h4>
          <p className="lws-productCategory">category: {lws_inputCategory}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price"> {lws_inputPrice}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity"> {lws_inputQuantity}</span>
            </p>
          </div>
          <button
            className="lws-btnAddToCart"
            // disabled={lws_inputQuantity <= 0}
            onClick={handleAddToCart}
            disabled={lws_inputQuantity <= 0}
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
