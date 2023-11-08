import React, { Fragment } from "react";
import swal from "sweetalert";

//component
import Button from "../UI/Button";
import InputTemplate from "../UI/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

//type
import { FormValues, ProductType } from "../../types/common.d";

//api req
import { updateProduct } from "../../services/apiRequests";

import productsInputArray, {
  productInputValidationSchema,
} from "../../constants/productsInputArray";
import { ProductsData } from "../../pages/Products/Products";

const flattenedProductsInputArray = productsInputArray.reduce(
  (acc, curr) => acc.concat(curr),
  []
);

type ModalType = {
  product: ProductType;
  setIsEditModalShown: React.Dispatch<React.SetStateAction<boolean>>;
};

function ShowEditProductModal({ setIsEditModalShown, product }: ModalType) {
  const { setProductsArray } = ProductsData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(productInputValidationSchema),
  });

  const handleProductUpdate: SubmitHandler<FormValues> = (data: FormValues) => {
    swal({
      title: "آیا از تغییر اصلاعات محصول مطمئن هستید؟",
      icon: "warning",
      buttons: ["بله", "خیر"],
    }).then(async (res) => {
      if (!res) {
        //update product operation
        try {
          const res = await updateProduct(product.id, data); // return new list of products
          setIsEditModalShown(false);
          setProductsArray(res);
          swal({
            title: "محصول مورد نظر با موفقیت آپدیت شد",
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
    <div className="bg-white p-5 py-7 max-h-[80vh] overflow-auto">
      <h1 className="text-lg">اطلاعات جدید محصول را وارد کنید</h1>
      <form onSubmit={handleSubmit(handleProductUpdate)}>
        {flattenedProductsInputArray.map((input) => (
          <Fragment key={input.name}>
            <InputTemplate
              isForEditModal
              register={register}
              {...input}
              product={product}
              errors={errors}
            />
          </Fragment>
        ))}
        <Button type="submit" className="w-full mt-4">
          ثبت محصول جدید
        </Button>
      </form>
    </div>
  );
}

export default ShowEditProductModal;
