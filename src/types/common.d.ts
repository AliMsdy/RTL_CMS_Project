import React, { InputHTMLAttributes, ReactNode } from "react";

import { Path, UseFormRegister,FieldErrors } from "react-hook-form";

type SidebarProps = {
  sidebar?: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

type ChildrenPropType = {
  children?: ReactNode;
};

type ProductType = {
  id?: number;
  productDesc?: string;
  title: string;
  price: number;
  count: number;
  img: string;
  popularity: number;
  sale: number;
  colors: number;
};

type InputType<T> = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  product?: ProductType;
  label?: string;
  isForEditModal?: boolean;
  name: Path<T> | string;
  errors:FieldErrors<T>;
  register: UseFormRegister<T>;
};




type CommentType = {
  id?:number;
  isAccept?: number;
  body: string;
  date?: string;
  hour?:string;
  userID?: string;
  productID?: string;
}

// type setState<T=never[]> = React.Dispatch<React.SetStateAction<T>>


export type {
  ChildrenPropType,
  InputType,
  ProductType,
  SidebarProps,
  CommentType,
  setState,
};
