import React, { InputHTMLAttributes, ReactNode } from "react";

import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

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
  user?: UserType;
  label?: string;
  isForEditModal?: boolean;
  name: Path<T> | string;
  errors: FieldErrors<T>;
  register: UseFormRegister;
};

type CommentType = {
  id?: number;
  isAccept?: number;
  body: string;
  date?: string;
  hour?: string;
  userID?: string;
  productID?: string;
};

type UserType = {
  id?: number;
  firsname: string;
  lastname: string;
  username: string;
  password: string;
  phone: number;
  city: string;
  email: string;
  address: string;
  score: number;
  buy: number;
};

// type setState<T=never[]> = React.Dispatch<React.SetStateAction<T>>

export type {
  ChildrenPropType,
  CommentType,
  InputType,
  ProductType,
  SidebarProps,
  UserType,
  setState,
};
