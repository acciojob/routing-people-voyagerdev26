import React,{useState,useEffect} from "react";

import { useParams } from "react-router-dom/cjs/react-router-dom";

const UserDetails=()=>{

  let {id}= useParams();
  let [person,setPerson]= useState("");
  let [loading,setLoading]=useState(true);


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json()).then(obj=>{
      setTimeout(()=>{
        setLoading(false);

        setPerson(obj)});
      },2000)
  },[id])

  if(loading) return (<div>Loading...</div>)
  return (
    <div>

      <h1>User Details</h1>
      <p><b>Name:</b> {person.name}</p>
      <p><b>Username:</b> {person.username}</p>
      <p><b>Email:</b> {person.email}</p>
      <p><b>Phone:</b> {person.phone}</p>
      <p><b>Website:</b> {person.website}</p>
      
    </div>
  )
}

export default UserDetails;