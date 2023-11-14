import { Fragment } from "react";

//component
import Button from "../UI/Button";
import InputTemplate from "../UI/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

//type
import { ProductType, setState } from "../../types/common.d";

//api req
import { updateProduct } from "../../services/apiRequests";

import productsInputArray, {
  productInputValidationSchema,
} from "../../constants/productsInputArray";
import { editHandler } from "../../helpers/Operations";
import { ProductsData } from "../../pages/Products/Products";

const flattenedProductsInputArray = productsInputArray.reduce(
  (acc, curr) => acc.concat(curr),
  []
);

type ModalType = {
  product: ProductType;
  setIsEditModalShown: setState<boolean>;
};

function ShowEditProductModal({ setIsEditModalShown, product }: ModalType) {
  const { setProductsArray } = ProductsData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productInputValidationSchema),
  });

  const handleProductUpdate: SubmitHandler<ProductType> = (
    data: ProductType
  ) => {
    editHandler(
      "اطلاعات محصول",
      data,
      updateProduct,
      product.id,
      setProductsArray,
      setIsEditModalShown
    );
  };
  return (
    <div className="p-5 py-7 max-h-[80vh] overflow-auto">
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

