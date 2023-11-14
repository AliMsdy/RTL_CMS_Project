// import React from "react";
import swal from "sweetalert";
import { CommentType, ProductType, UserType, setState } from "../types/common";

type AsyncDeleteType = (id: number | undefined) => Promise<[]>;

const deleteHandler = (
  type: string,
  asyncDelete: AsyncDeleteType,
  id: number | undefined,
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

// type AsyncFuncType = (
//   id: number,
//   data: ProductType | Pick<CommentType, "body"> | UserType
// ) => Promise<ProductType[]> | Promise<CommentType[]> | Promise<UserType[]>;

const editHandler = (
  type: string,
  data: ProductType | UserType | Pick<CommentType, "body">,
  asyncFunc: any,
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
        if (id) {
          // console.log(first)
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
