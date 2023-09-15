import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/products/action";

const ProductAdd = () => {
  const [productInfo, setProductInfo] = useState({});
  const id = useSelector((state) => state.length + 1);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setProductInfo({ ...productInfo, [e.target.id]: value, id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(productInfo));
  };

  console.log(productInfo);
  return (
    <>
      {/* products container ends  */}
      <div>
        {/* Product Input Form */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form
            className="space-y-4 text-[#534F4F]"
            id="lws-addProductForm"
            onSubmit={handleSubmit}
          >
            {/* product name  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input
                className="addProductInput"
                id="lws-inputName"
                type="text"
                required
                onBlur={handleOnChange}
              />
            </div>
            {/* product category  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input
                className="addProductInput"
                id="lws-inputCategory"
                type="text"
                required
                onBlur={handleOnChange}
              />
            </div>
            {/* product image url  */}
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input
                className="addProductInput"
                id="lws-inputImage"
                type="text"
                required
                onBlur={handleOnChange}
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
                  id="lws-inputPrice"
                  required
                  onBlur={handleOnChange}
                />
              </div>
              {/* quantity  */}
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputQuantity"
                  required
                  onBlur={handleOnChange}
                />
              </div>
            </div>
            {/* submit button  */}
            <button type="submit" id="lws-inputSubmit" className="submit">
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
