import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CandidateFp = () => {
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = { email };
            const res = await axios.post("https://hrmd-backend.onrender.com/api/candidateForgotPassword", payload);
            toast.success(res.data.message);
            setTimeout(() => {
                navigate("/login/candidate"); 
            }, 5000);
        } catch (err) {
            console.error(err);
            toast.error(err.response.data.message || "Something went wrong");
            setTimeout(() => {
                setEmail(""); 
            }, 3000);
        }
    };
    return (
        <div className='container mt-5 p-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <h5 className='card-header text-center bg-success text-white'>Candidate Forgot-password</h5>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor='email' className='form-label'>Email:</label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className='text-center mb-3'>
                                            <button className="btn btn-success" type="submit">Submit</button>
                                    </div>
                                    <div className='text-center'>
                                        <Link to="/login/candidate">Back to Login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CandidateFp;