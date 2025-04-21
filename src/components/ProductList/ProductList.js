// src/components/ProductList/ProductList.js
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import { Grid, Wrapper } from "./ProductList.styles";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://ko19zy4goa.execute-api.us-east-1.amazonaws.com/prod/products"
      ); // Adjust endpoint as needed
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default ProductList;
