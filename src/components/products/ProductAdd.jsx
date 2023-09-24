import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/action";

const ProductAdd = () => {
  const [productData, setProductData] = useState({});
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productData));
  };

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.id]: event.target.value,
    });
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
            onSubmit={handleFormSubmit}
          >
            {/* product name  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input
                className="addProductInput"
                id="lws_inputName"
                type="text"
                required
                onBlur={() => handleChange(event)}
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
                onBlur={() => handleChange(event)}
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
                onBlur={() => handleChange(event)}
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
                  onBlur={() => handleChange(event)}
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
                  onBlur={() => handleChange(event)}
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
