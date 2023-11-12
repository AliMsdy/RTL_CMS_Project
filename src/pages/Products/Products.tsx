import {
  Suspense,
  createContext,
  lazy,
  useContext,
  useEffect,
  useState,
} from "react";

//components
import AddNewProduct from "../../Components/ProductsPageComponents/AddNewProduct";
import Loading from "../../Components/UI/Loading";

//type
import { ProductType, setState } from "../../types/common.d";

//requests
import { getProducts } from "../../services/apiRequests";

const ProductsTable = lazy(
  () => import("../../Components/ProductsPageComponents/ProductsTable")
);

type ProductContext = {
  productsArray: ProductType[];
  setProductsArray:setState
};

const ProductsContext = createContext<ProductContext | null>(null);

function Products() {
  const [productsArray, setProductsArray] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProductsArray(res));
  }, []);

  return (
    <ProductsContext.Provider value={{ productsArray, setProductsArray }}>
      <AddNewProduct />
      <Suspense
        fallback={
          <div className="mt-6">
            <Loading />
          </div>
        }
      >
        <ProductsTable />
      </Suspense>
    </ProductsContext.Provider>
  );
}
export const ProductsData = () => {
  const context = useContext(ProductsContext);
  if (context === null) {
    throw new Error("useProductsData must be used within a ProductsProvider");
  }
  return context;
};

export default Products;
