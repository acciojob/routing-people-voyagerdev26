import React from "react";

let list=[{id:1,name:"Leanne Graham"},{id:2,name:"Ervin Howell"},{id:3,name:"Clementine Bauch"},
  {id:4,name:"Patricia Lebsack"},{id:5,name:"Chelsey Dietrich"},{id:6,name:"Mrs. Dennis Schulist"},{id:7,name:"Kurtis Weissnat"},
  {id:8,name:"Nicholas Runolfsdottir V"},{id:9,name:"Glenna Reichert"},{id:10,name:"Clementina DuBuque"}];

import {Link} from "react-router-dom"
const UserList=()=>{
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {
          list.map((s)=> <li key={s.id}> <Link to={`/users/${s.id}`}>{s.name}</Link> </li>)
        }
      </ul>
    </div>
  )
}

export default UserList;