// src/api/orderApi.js
export const placeOrder = async (order, token) => {
  const res = await fetch("https://your-api-url/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });

  if (!res.ok) throw new Error("Order failed");
  return res.json();
};
