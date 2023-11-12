import * as yup from "yup";

//icons
import {
  BsBasket3,
  BsCardImage,
  BsCurrencyDollar,
  BsCursorText,
  BsShopWindow,
  BsStar,
} from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";

//type
import { InputType,ProductType } from "../types/common.d";

const productInputValidationSchema = yup.object().shape({
  title: yup.string().required("فیلد را تکمیل کنید(الزامی)"),
  price: yup.number().required("فیلد را تکمیل کنید(الزامی)"),
  count: yup.number().required("فیلد را تکمیل کنید(الزامی)"),
  img: yup.string().required("فیلد را تکمیل کنید(الزامی)"),
  popularity: yup.number().required("فیلد را تکمیل کنید(الزامی)"),
  sale: yup.number().required("فیلد را تکمیل کنید(الزامی)"),
  colors: yup.number().required("فیلد را تکمیل کنید(الزامی)"),
});

const productsInputArray: Omit<InputType<ProductType>, "register" | "errors">[][] = [
  [
    {
      type: "text",
      name: "title",
      placeholder: "اسم محصول را بنویسید",
      label: "نام محصول",
      icon: <BsCursorText />,
    },
    {
      type: "number",
      name: "price",
      placeholder: "قیمت محصول را بنویسید",
      label: "قیمت",
      icon: <BsCurrencyDollar />,
    },
    {
      type: "number",
      name: "count",
      placeholder: "موجودی محصول را بنویسید",
      label: "موجودی انبار",
      icon: <BsBasket3 />,
    },
    {
      type: "text",
      name: "img",
      placeholder: "آدرس عکس محصول را بنویسید",
      label: "آدرس عکس محصول",
      icon: <BsCardImage />,
    },
  ],
  [
    {
      type: "number",
      name: "popularity",
      placeholder: "میزان محبوبیت محصول را بنویسید",
      label: "محبوبیت",
      icon: <BsStar />,
    },

    {
      type: "number",
      name: "sale",
      placeholder: "میزان فروش محصول را بنویسید",
      label: "میزان فروش",
      icon: <BsShopWindow />,
    },
    {
      type: "number",
      name: "colors",
      placeholder: "تعداد رنگ بندی محصول را بنویسید",
      label: "تعداد رنگ بندی",
      icon: <VscSymbolColor />,
    },
  ],
];
export { productInputValidationSchema };
export default productsInputArray;
