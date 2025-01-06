import { useEffect, useState } from "react"
import {Link}from 'react-router-dom'
import './User.css';
import axios from 'axios';
 const User = () => {
  const[users,setUser]=useState([]);
  useEffect(()=>{
    axios.get("https://backend-express-wib5.onrender.com/api/user/fetch")
    .then((results)=>{
      console.log(results.data);
      setUser(results.data.users1)
    })
  })
  const deleteUser=(id)=>{
    axios.delete(`https://backend-express-wib5.onrender.com/api/user/delete/${id}`).then(()=>{
      console.log("User deleted successfully");
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
    <h1>Users</h1>
    <div>
      <table id="userTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {
            users.map((user)=>{
              return(
                  // eslint-disable-next-line react/jsx-key
                  <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td><button><Link to={`/update/${user.id}`}>Update user</Link></button></td>
                      <td><button onClick={()=>deleteUser(user._id)}>Delete</button></td>
                  </tr>
              )
            })
          }
            
        </tbody>
    </table>
    </div>
    <div>
      <h2>Click the button to add user</h2>
      <button><Link to='/create'>Create user</Link></button>
    </div>
    </>
  )
}
export default User;