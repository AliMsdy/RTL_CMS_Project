// import React from "react";
import swal from "sweetalert";
import { CommentType, ProductType, setState } from "../types/common";

type AsyncDeleteType = (id: number) => Promise<[]>;

const deleteHandler = (
  type: string,
  asyncDelete: AsyncDeleteType,
  id: number,
  setStateFunc: setState
) => {
  swal({
    title: `آیا از حذف ${type} مطمئن هستید؟`,
    icon: "error",
    buttons: ["بله", "خیر"],
  }).then(async (res) => {
    if (!res) {
      //delete product operation
      try {
        const res = await asyncDelete(id); // return new list of products
        setStateFunc(res);
        swal({
          title: `${type} مورد نظر با موفقیت حذف شد`,
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

type UpdateProduct = (id: number, data: ProductType) => Promise<ProductType[]>

type UpdateComment = (id: number, data: Pick<CommentType, "body">) => Promise<CommentType[]>

const editHandler = (
  type: string,
  data: ProductType | Pick<CommentType, "body">,
  asyncFunc: UpdateProduct | UpdateComment,
  id: number | undefined,
  setStateFunc: setState,
  closeBox: setState<boolean>
) => {
  swal({
    title: `آیا از تغییر ${type} مطمئن هستید؟`,
    icon: "warning",
    buttons: ["بله", "خیر"],
  }).then(async (res) => {
    if (!res) {
      //update product operation
      try {
        if(id){
        const res = await asyncFunc(id, data); // return new list of products
        closeBox(false);
        setStateFunc(res);
        swal({
          title: `${type} مورد نظر با موفقیت آپدیت شد`,
          icon: "success",
        });
        }
      } catch (error) {
        swal({
          title: "خطایی رخ داد،دوباره امتحان کنید",
          icon: "error",
        });
      }
    }
  });
};

export { deleteHandler, editHandler };


