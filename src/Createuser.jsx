import { Link, useNavigate  } from 'react-router-dom';
import './Createuser.css';
import { useState } from 'react';
import axios from 'axios';

const Createuser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate=useNavigate();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post('https://backend-express-wib5.onrender.com/api/user/create', { name, email, address })
      .then((results) => {
        console.log(results.data);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <h2>Create New User</h2>
        <form onSubmit={submit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label>Address:</label>
            <textarea
              id="address"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter your address"
            ></textarea>
          </div>

          <button type="submit">Create User</button>
        </form>
      </div>

      <div>
        <h2>Click the button to add user</h2>
        <Link to='/update'>
          <button>Update User</button>
        </Link>
      </div>
    </>
  );
};

export default Createuser;
