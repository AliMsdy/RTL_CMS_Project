import { useState } from "react";

//api req
import { deleteProduct } from "../../services/apiRequests";

//component
import Modal from "../Modal/Modal";
import Button from "../UI/Button";
import ShowDetailProductModal from "./ShowDetailProductModal";
import ShowEditProductModal from "./ShowEditProductModal";

import swal from "sweetalert";

//type
import { ProductType } from "../../types/common.d";
type ProductTypeTable = ProductType & {
  setProductsArray: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function ProductTableItem({ setProductsArray, ...product }: ProductTypeTable) {
  const [isDetailModalShown, setIsDetailModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const { img, title, price, count, id } = product;
  const deleteProductHandler = () => {
    swal({
      title: "آیا از حذف کالا مطمئن هستید؟",
      icon: "error",
      buttons: ["بله", "خیر"],
    }).then(async (res) => {
      if (!res) {
        //delete product operation
        try {
          const res = await deleteProduct(id); // return new list of products
          setProductsArray(res);
          swal({
            title: "محصول مورد نظر با موفقیت حذف شد",
            icon: "success",
          });
        } catch (error) {
          swal({
            title: "خطایی رخ داد،دوباره امتحان کنید",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <>
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
            <Button onClick={deleteProductHandler}>حذف</Button>
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
              <ShowEditProductModal setIsEditModalShown={setIsEditModalShown} product={product}/>
            </Modal>
          )}
        </td>
      </tr>
    </>
  );
}

export default ProductTableItem;
