import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const RegAdmin = () => {
    const{username,email,password,setEmail,setUsername,setPassword,registerAdmin}=useContext(AuthContext)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        registerAdmin(username,email,password)
        setUsername('')
        setEmail('')
        setPassword('')
    }
    return (
        <div className="container-fluid two d-flex justify-content-center align-items-center vh-100 ">
            <div className="card">
                <div className="card-body p-4">
                    <h2 className="card-title text-center p-2"><strong><i className="fa-solid fa-user"></i> Register as Admin</strong></h2>
                    <form className='p-2' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor='username'><h6>Name:</h6></label>
                            <input type="text" className="form-control"  name='username' placeholder="Enter your name" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor='email'><h6>Email:</h6></label>
                            <input type="email" className="form-control"  name='email' placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor='password'><h6>Password:</h6></label>
                            <input type="password" className="form-control" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <div className='text-center mt-2'>
                            <button type='submit' className="btn btn-success btn-block">Sign Up</button>
                        </div>
                        <p className="mt-3 text-center">Already have an account? <Link to="/login/admin" className='text-decoration-none'>Login here</Link></p>
                    </form>
                    <p className='text-center '><Link to="/" className='text-black text-decoration-none'><i className="fa-solid fa-arrow-left"></i> Back to homepage</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegAdmin;