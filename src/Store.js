import React from "react";
import Users from "./Users";
import Orders from "./Orders";
import Products from "./Products";

function Store () {
    return (
        <div>
            <Users/>
            <Products/>
            <Orders/>
        </div>
    )
}

export default Store