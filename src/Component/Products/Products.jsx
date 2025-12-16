import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const {
      data: { data },
    } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
    console.log(data);

    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      {products.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="w-full">
                <div className="p-2">
                  <img
                    src={product.imageCover}
                    alt={product.title.slice(0, 10)}
                    className="w-full h-auto rounded-lg"
                  />
                  <h2 className="mt-2 text-lg font-semibold">
                    {product.title.slice(0, 10)}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <i className="fas fa-spinner fa-spin text-6xl text-blue-600"></i>
        </div>
      )}
    </React.Fragment>
  );
}
