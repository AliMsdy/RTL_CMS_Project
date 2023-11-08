import { FormValues } from "../types/common.d";
import axios from "./axiosInstance";

const getProducts = async () => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (data: FormValues) => {
  try {
    const res = await axios.post("/products", data);
    console.log("res",res)
    const response = await getProducts();
    console.log("response",response)
    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id: number) => {
  try {
    await axios.delete(`/products/${id}`);
    const response = await getProducts(); //return new list of products
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id: number, data: FormValues) => {
  try {
    await axios.put(`/products/${id}`, data);
    const response = await getProducts(); //return new list of products
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { createProduct, deleteProduct, getProducts, updateProduct };
