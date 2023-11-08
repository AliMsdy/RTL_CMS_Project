import React, { InputHTMLAttributes, ReactNode } from "react";

import { Path, UseFormRegister,FieldErrors } from "react-hook-form";

type SidebarProps = {
  sidebar?: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

type ChildrenPropType = {
  children?: ReactNode;
};

type ProductType = FormValues & {
  id: number;
  categoryID: number;
  url: string;
  productDesc: string;
};

type ProductInput = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  product?: ProductType;
  label?: string;
  isForEditModal?: boolean;
  name: Path<FormValues>;
  errors:FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
};

type FormValues = {
  title: string;
  price: number;
  count: number;
  img: string;
  popularity: number;
  sale: number;
  colors: number;
};

export type {
  ChildrenPropType,
  FormValues,
  ProductInput,
  ProductType,
  SidebarProps,
};
