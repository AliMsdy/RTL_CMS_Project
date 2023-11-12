import { CommentType, ProductType } from "../types/common.d";
import axios from "./axiosInstance";
// START OF PRODUCTS REQUESTS
const getProducts = async () => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (data: ProductType) => {
  try {
    const res = await axios.post("/products", data);
    console.log("res", res);
    const response = await getProducts();
    console.log("response", response);
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



const updateProduct = async (
  id: number,
  data: ProductType
) => {
  try {
    await axios.put(`/products/${id}`, data);
    const response = await getProducts(); //return new list of products
    return response;
  } catch (error) {
    console.log(error);
  }
};
// END OF PRODUCTS REQUESTS

// START OF COMMENTS REQUESTS

const getComments = async () => {
  try {
    const response = await axios.get("/comments");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteComment = async (id: number) => {
  try {
    await axios.delete(`/comments/${id}`);
    const response = await getComments(); //return new list of products
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateComment = async (id: number, data: Pick<CommentType, "body">) => {
  try {
    await axios.put(`/comments/${id}`, data);
    const response = await getComments(); //return new list of products
    return response;
  } catch (error) {
    console.log(error);
  }
};

const confirmComment = async (id: number | undefined) => {
  try {
    await axios.post(`/comments/accept/${id}`);
    const response = await getComments(); //return new list of products
    return response;
  } catch (error) {
    console.log(error);
  }
};
const rejectComment = async (id: number | undefined):Promise<CommentType[]| undefined> => {
  try {
    await axios.post(`/comments/reject/${id}`);
    const response = await getComments(); //return new list of products
    return response;
  } catch (error) {
    console.log(error);
  }
};
// END OF COMMENTS REQUESTS

export {
  createProduct,
  deleteComment,
  deleteProduct,
  getComments,
  getProducts,
  updateComment,
  updateProduct,
  confirmComment,
  rejectComment,
};
