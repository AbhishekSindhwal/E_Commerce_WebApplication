// import Chart from "../../components/chart/Chart"
// import {productData} from "../../dummyData"
import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/apiCalls";


export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const dispatch = useDispatch;
    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId));

    const [input, setInputs] = useState({});
    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    };
    const handleClick = (e) => {
        e.preventDefault();
        const updatedProduct = { ...input };
     //   updateProduct(product._id, updatedProduct, dispatch);
    };
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                {/* <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div> */}
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img}
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        {/* <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div> */}

                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">{product.inStock & "YES" || "NO"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input name="title" type="text" placeholder={product.title} onChange={handleChange} />
                        <label>Product Description</label>
                        <input name="desc" type="text" placeholder={product.desc} onChange={handleChange} />
                        <label>Price</label>
                        <input name="price" type="text" placeholder={product.price} onChange={handleChange} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock" onChange={handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton" onClick={handleClick}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
