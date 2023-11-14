import { useState } from "react";
import { deleteHandler } from "../../helpers/Operations";
//api req
import { deleteProduct } from "../../services/apiRequests";

//component
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import ShowDetailProductModal from "./ShowDetailProductModal";
import ShowEditProductModal from "./ShowEditProductModal";

//type
import { ProductType } from "../../types/common.d";
//product context
import { ProductsData } from "../../pages/Products/Products";

function ProductTableItem({ ...product }: ProductType) {
  const [isDetailModalShown, setIsDetailModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const { setProductsArray } = ProductsData();
  const { img, title, price, count, id } = product;
  return (
    <tr>
      <td className="w-[20%]">
        <img
          src={img}
          alt="product-image"
          className="max-w-[150px] w-full h-auto block mx-auto"
        />
      </td>
      <td className="w-[20%] align-middle text-center">{title}</td>
      <td className="w-[20%] align-middle text-center">
        {price.toLocaleString()} تومان
      </td>
      <td className="w-[20%] align-middle text-center">{count}</td>
      <td className=" align-middle w-[20%]">
        <div className="flex sm:justify-center justify-end gap-1 sm:gap-2">
          <Button onClick={() => setIsDetailModalShown(true)}>جزئیات</Button>
          <Button
          variant="delete"
            onClick={() =>
              deleteHandler("محصول", deleteProduct, id, setProductsArray)
            }
          >
            حذف
        </Button>
          <Button onClick={() => setIsEditModalShown(true)}>ویرایش</Button>
        </div>
      </td>
      {/* Putting the modal in the td to resolve the warning which says div can't be the direct child of tbody */}
      <td>
        {isDetailModalShown && (
          <Modal closeModal={() => setIsDetailModalShown(false)}>
            <ShowDetailProductModal {...product} />
          </Modal>
        )}
        {isEditModalShown && (
          <Modal closeModal={() => setIsEditModalShown(false)}>
            <ShowEditProductModal
              setIsEditModalShown={setIsEditModalShown}
              product={product}
            />
          </Modal>
        )}
      </td>
    </tr>
  );
}

export default ProductTableItem;
