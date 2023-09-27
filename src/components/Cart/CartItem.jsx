import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
const CartItem = ({ product }) => {
  const {
    lws_inputImage,
    lws_inputName,
    lws_inputCategory,
    lws_inputPrice,

    cartQuantity,
  } = product;
  const totalPrice = cartQuantity * lws_inputPrice;
  return (
    <>
      {" "}
      {/* Cart Item */}
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/* cart image  */}
          <img className="lws-cartImage" src={lws_inputImage} alt="product" />
          {/* cart item info  */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{lws_inputName}</h4>
            <p className="lws-cartCategory">{lws_inputCategory}</p>
            <p>
              BDT <span className="lws-cartPrice">{lws_inputPrice}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* amount buttons */}
          <div className="flex items-center space-x-4">
            <button className="lws-incrementQuantity">
              <i className="text-lg">
                <AiOutlinePlus />
              </i>
            </button>
            <span className="lws-cartQuantity">{cartQuantity}</span>
            <button className="lws-decrementQuantity">
              <i className="text-lg">
                <AiOutlineMinus />
              </i>
            </button>
          </div>
          {/* price  */}
          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{totalPrice}</span>
          </p>
        </div>
        {/* delete button  */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart">
            <i className="text-lg text-red-400">
              <AiOutlineDelete />
            </i>
          </button>
        </div>
      </div>
      {/* Cart Items Ends  */}
    </>
  );
};

export default CartItem;
