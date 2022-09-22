import React, {useEffect, useState} from "react";
import Users from "./Users";
import Orders from "./Orders";
import Products from "./Products";

function Store () {
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])

    const urls = [
        "https://assessment.api.vweb.app/users",
        "https://assessment.api.vweb.app/products",
        "https://assessment.api.vweb.app/orders",
      ];

    useEffect(() => {
        Promise.all(urls.map((url) => fetch(url)
            .then((res) =>res.json())))
            .then(([users, products, orders]) => {
                setUsers(users);
                setProducts(products);
                setOrders(orders);
            })
    }, [])
    return (
        <div>
            <Users users={users}/>
            <Products products={products}/>
            <Orders/>
        </div>
    )
}

export default Store