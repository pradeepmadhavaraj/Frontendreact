import  { useState } from 'react'
import "./User.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateUser = () => {
  const {id}=useParams();
  const [name,setName]=useState('');
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('');
    const navigate=useNavigate()

    const submit = (e) => {
      
      e.preventDefault();
      
      axios.put(`https://backend-express-wib5.onrender.com/api/user/update/${id}`,{name,email,address})
      .then((res)=>{
        console.log(res.data)
        navigate('/')
        
      })
      .catch((err)=>console.log(err))
    }
  return (
    <div>
      UpdateUser
      <form onSubmit={submit}>
        Name:<input type='text' value={name} onChange={(e)=>setName(e.target.value)}>
        </input><br/>

        Email:<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>

        Address:<input type='text' value={address} onChange={(e)=>setAddress(e.target.value)}/><br/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default UpdateUser