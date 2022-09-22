import React from "react";

function Users ({users}) {
    const user = users.map((user) => {
       return (
        <div key={user.user_id}>
            <p>{user.name}</p>
        </div>
       )
    })
    return(
        <div>
            <h2>Users</h2>
            {user}
        </div>
    )
}

export default Users