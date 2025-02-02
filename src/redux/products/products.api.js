import axios from "axios";

export const getProductsApi = async (category,page,limit) => {
    let res = await axios.get(`https://amazon-t415.onrender.com/products?category=${category}&_page=${page}&_limit=${limit}`);
    return res.data;
  };

  export const searchProductsApi = async (searchKeyword) => {
    let res = await axios.get(`https://amazon-t415.onrender.com/products?q=${searchKeyword}&_limit=10`);
    return res.data;
  };