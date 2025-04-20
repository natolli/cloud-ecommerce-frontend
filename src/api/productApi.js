// src/api/productApi.js
export const fetchAllProducts = async () => {
  const res = await fetch("https://your-api-url/products"); // Replace with your actual API Gateway endpoint
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://your-api-url/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
