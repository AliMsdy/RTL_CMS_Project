//components
import ProductTableItem from "./ProductTableItem";
//type
import { ProductType } from "../../types/common.d";

import { ProductsData } from "../../pages/Products/Products";

function ProductsTable() {
  const { productsArray, setProductsArray } = ProductsData();

  return (
    <div className="mt-6 bg-white p-4 pt-0 overflow-auto">
      <table className="w-full border-separate border-spacing-y-5 lg:border-spacing-y-6 ">
        <thead className="lg:text-lg">
          <tr>
            <th className="">عکس</th>
            <th className="text-center">اسم</th>
            <th className="text-center">قیمت</th>
            <th className="text-center">موجودی</th>
          </tr>
        </thead>
        <tbody className="lg:text-lg">
          {productsArray.map((product: ProductType) => (
            <ProductTableItem
              setProductsArray={setProductsArray}
              key={product.id}
              {...product}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
