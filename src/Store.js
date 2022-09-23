import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./Users";
import Orders from "./Orders";
import Products from "./Products";

function Store() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const links = [
    "https://assessment.api.vweb.app/users",
    "https://assessment.api.vweb.app/products",
    "https://assessment.api.vweb.app/orders",
  ];

  useEffect(() => {
    Promise.all(
      links.map((link) => fetch(link).then((res) => res.json()))
    ).then(([users, products, orders]) => {
      setUsers(users);
      setProducts(products);
      setOrders(orders);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/products"
          element={<Products products={products} />}
        />
        <Route exact path="/users" element={<Users users={users} />} />
      </Routes>
      <Orders orders={orders} products={products} />
    </div>
  );
}

export default Store;
