import { useState } from "react";
import Child from "../Child/Child.jsx";
export default function Parent() {
  const [products, setProducts] = useState([
    { id: 512, name: "Hp", onSale: true, count: 5, price: 14000 },
    { id: 32, name: "Dell", onSale: false, count: 3, price: 18510 },
    { id: 47, name: "Samsung", onSale: true, count: 71, price: 78100 },
    { id: 9458, name: "Oppo", onSale: false, count: 12, price: 9500 },
    { id: 1214, name: "Iphone 15", onSale: false, count: 39, price: 55780 },
    { id: 12114, name: "Iphone 14", onSale: true, count: 39, price: 55780 },
    { id: 13214, name: "Iphone 13", onSale: false, count: 39, price: 55780 },
    { id: 15214, name: "Iphone 11", onSale: true, count: 39, price: 55780 },
  ]);

  function deleteProduct(id) {
    // Deep Copy
    let filteredProducts = structuredClone(products);

    // Update Proccess
    filteredProducts = filteredProducts.filter((product) => product.id != id);

    // SetState
    setProducts(filteredProducts);
  }

  function upddateCount(index, step) {
    // Deep Copy
    let filteredProducts = structuredClone(products);

    // Update Proccess
    if (filteredProducts[index].count == 0 && step == -1) {
      filteredProducts[index].count = 0;
      return;
    }
    filteredProducts[index].count += step;

    // SetState
    setProducts(filteredProducts);
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap -mx-2">
          {products.map((product, index) => (
            <Child
              key={product.id}
              products={product}
              deleteProduct={deleteProduct}
              index={index}
              upddateCount={upddateCount}
            />
          ))}
        </div>
      </div>
    </>
  );
}
