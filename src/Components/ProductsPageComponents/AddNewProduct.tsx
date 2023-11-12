import { Fragment } from "react";
//component
import Button from "../UI/Button";
import InputTemplate from "../UI/Input";

//constant
import productsInputArray, {
  productInputValidationSchema,
} from "../../constants/productsInputArray";

//type
import { ProductType } from "../../types/common.d";

//product context
import { ProductsData } from "../../pages/Products/Products";
//api reqs
import { createProduct } from "../../services/apiRequests";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import swal from "sweetalert";

function AddNewProduct() {
  const {setProductsArray} = ProductsData()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: yupResolver(productInputValidationSchema),
  });
  const handleAddProduct: SubmitHandler<ProductType> = (data: ProductType) => {
    swal({
      title: "آیا از اضافه شدن کالا مطمئن هستید؟",
      icon: "info",
      buttons: ["بله", "خیر"],
    }).then(async (res) => {
      if (!res) {
        //create product operation
        try {
          const res = await createProduct(data);
          setProductsArray(res)
          reset()
          swal({
            title: "محصول مورد نظر با موفقیت اضافه شد",
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
    <section className="mt-4">
      <h3 className="text-2xl mb-4">افزودن محصول جدید</h3>
      <div className="bg-white p-4">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="md:flex justify-between gap-x-8">
            {productsInputArray.map((groups, index) => {
              return (
                <div key={index} className="w-full">
                  {groups.map((input) => {
                    return (
                      <Fragment key={input.name}>
                        <InputTemplate
                          errors={errors}
                          register={register}
                          {...input}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="flex sm:justify-end justify-center mt-4">
            <Button type="submit">ثبت محصول</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddNewProduct;
