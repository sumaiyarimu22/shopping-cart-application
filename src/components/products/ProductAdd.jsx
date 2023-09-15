import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/products/action";

const ProductAdd = () => {
  const [productInfo, setProductInfo] = useState({});
  const id = useSelector((state) => state.productReducer.length + 1);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productInfo));
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setProductInfo({ ...productInfo, [e.target.id]: value, id });
  };

  return (
    <>
      {/* products container ends  */}
      <div>
        {/* Product Input Form */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form
            className="space-y-4 text-[#534F4F]"
            id="lws_addProductForm"
            onSubmit={handleSubmit}
          >
            {/* product name  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input
                className="addProductInput"
                id="lws_inputName"
                type="text"
                required
                onChange={handleOnChange}
              />
            </div>
            {/* product category  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input
                className="addProductInput"
                id="lws_inputCategory"
                type="text"
                required
                onChange={handleOnChange}
              />
            </div>
            {/* product image url  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input
                className="addProductInput"
                id="lws_inputImage"
                type="text"
                required
                onChange={handleOnChange}
              />
            </div>
            {/* price & quantity container */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* price  */}
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws_inputPrice"
                  required
                  onChange={handleOnChange}
                />
              </div>
              {/* quantity  */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws_inputQuantity"
                  required
                  onChange={handleOnChange}
                />
              </div>
            </div>
            {/* submit button  */}
            <button type="submit" id="lws_inputSubmit" className="submit">
              Add Product
            </button>
          </form>
        </div>
        {/* Product Input Form Ends  */}
      </div>
    </>
  );
};

export default ProductAdd;
