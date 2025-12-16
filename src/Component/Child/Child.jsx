import React from "react";

export default function Child({
  products,
  deleteProduct,
  upddateCount,
  index,
}) {
  let { price, onSale, name, id, count } = products;

  return (
    <>
      <div className="w-full md:w-1/4 p-2">
        <div className="p-3 bg-gray-200 relative rounded-lg">
          <h1 className="text-xl font-bold mb-4">{name}</h1>
          <h3 className="text-lg">Id : {id}</h3>
          <h3 className="text-lg">Count : {count}</h3>
          <h3 className="text-lg">Price : {price}</h3>
          {onSale && (
            <span className="px-2 bg-red-600 text-white absolute top-0 right-0 m-1 rounded">
              sale
            </span>
          )}
          <button
            onClick={() => deleteProduct(id)}
            className=" mt-4 w-full py-1 text-sm border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"
          >
            Delete Product
          </button>
          <div className="update"></div>
          <button
            onClick={() => upddateCount(index, 1)}
            className="mt-3 ml-2 px-3 py-1 text-sm border border-yellow-500 text-yellow-600 rounded hover:bg-yellow-500 hover:text-white transition-colors"
          >
            Update Count +
          </button>
          <button
            onClick={() => upddateCount(index, -1)}
            className="mt-3 ml-2 px-3 py-1 text-sm border border-yellow-500 text-yellow-600 rounded hover:bg-yellow-500 hover:text-white transition-colors"
          >
            Update Count -
          </button>
        </div>
      </div>
    </>
  );
}
