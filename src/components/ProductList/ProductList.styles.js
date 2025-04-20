// src/components/ProductList/ProductList.styles.js
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;
