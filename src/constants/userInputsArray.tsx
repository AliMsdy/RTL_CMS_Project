import * as yup from "yup";

//icons
import { BsCursorText } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { LuPhone, LuUser } from "react-icons/lu";
import {
  MdAlternateEmail,
  MdDriveFileRenameOutline,
  MdOutlineConfirmationNumber,
} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRankingStar } from "react-icons/fa6"

const userInputValidationSchema = yup.object().shape({
  firsname: yup.string().required("فیلد را تکمیل کنید (الزامی)"),
  lastname: yup.string().required("فیلد را تکمیل کنید (الزامی)"),
  username: yup.string().required("فیلد را تکمیل کنید (الزامی)"),
  password: yup.string().required("فیلد را تکمیل کنید (الزامی)"),
  phone: yup.number().required("فیلد را تکمیل کنید (الزامی)"),
  city: yup.string().required("فیلد را تکمیل کنید (الزامی)"),
  email: yup.string().required("فیلد را تکمیل کنید (الزامی)"),
  address: yup.string().required("فیلد را تکمیل کنید (الزامی)"),
  score: yup.number().required("فیلد را تکمیل کنید (الزامی)"),
  buy: yup.number().required("فیلد را تکمیل کنید (الزامی)"),
});

const usersArray = [
  {
    type: "text",
    name: "firsname",
    placeholder: "نام کاربر را بنویسید",
    label: "نام",
    icon: <MdDriveFileRenameOutline />,
  },
  {
    type: "text",
    name: "lastname",
    placeholder: "نام خانوادگی را بنویسید",
    label: "نام خانوادگی",
    icon: <BsCursorText />,
  },
  {
    type: "text",
    name: "username",
    placeholder: "یوزر نیم کاربر را بنویسید",
    label: "نام کاربری",
    icon: <LuUser />,
  },
  {
    type: "text",
    name: "password",
    placeholder: "پسورد کاربر را بنویسید",
    label: "پسورد",
    icon: <RiLockPasswordLine />,
  },
  {
    type: "text",
    name: "phone",
    placeholder: "شماره تلفن کاربر را بنویسید",
    label: "شماره تلفن",
    icon: <LuPhone />,
  },
  {
    type: "text",
    name: "city",
    placeholder: "شهر کاربر را بنویسید",
    label: "شهر",
    icon: <FaCity />,
  },
  {
    type: "text",
    name: "email",
    placeholder: "ایمیل کاربر را بنویسید",
    label: "ایمیل",
    icon: <MdAlternateEmail />,
  },
  {
    type: "text",
    name: "address",
    placeholder: "آدرس کاربر را بنویسید",
    label: "آدرس",
    icon: <GrLocation />,
  },
  {
    type: "number",
    name: "score",
    placeholder: "امتیاز کاربر را بنویسید",
    label: "امتیاز",
    icon: <FaRankingStar />,
  },
  {
    type: "number",
    name: "buy",
    placeholder: "تعداد کالای خریداری شده کاربر را بنویسید",
    label: "تعداد کالا",
    icon: <MdOutlineConfirmationNumber />,
  },
];
export { userInputValidationSchema };
export default usersArray;
