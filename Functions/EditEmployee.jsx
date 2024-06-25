import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EditEmployee = ({adminId}) => {
    const { id } = useParams(); 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("");
    const [degree, setDegree] = useState("");
    const [department, setDepartment] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [salary, setSalary] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        await axios.get(`https://hrmd-backend.onrender.com/api/getEmployee/${id}`)
        .then(res=>{
            const { username, email, dob, gender, city, contact, role, degree, department, accountNumber, salary } = res.data.result;
            setUsername(username);
            setEmail(email);
            setDob(dob);
            setGender(gender);
            setCity(city);
            setContact(contact);
            setRole(role);
            setDegree(degree);
            setDepartment(department);
            setAccountNumber(accountNumber);
            setSalary(salary);
        })
        .catch((err)=>console.error(err));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { username, email,  dob, gender, city, contact, role, degree, department, accountNumber, salary };
        try {
            const res = await axios.put(`https://hrmd-backend.onrender.com/api/updateEmployee/${id}`, payload);
            toast.success(res.data.message);
            navigate(`/adminDashboard/${adminId}/employees`);
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
        setUsername('');
        setEmail('');
        setDob('');
        setGender('');
        setCity('');
        setContact('');
        setRole('');
        setDegree('');
        setDepartment('');
        setAccountNumber('');
        setSalary('');
    };
    return (
        <div className="container p-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h2 className="card-title text-center p-2">
                            <strong><i className="fa-solid fa-user"></i> Update Employee</strong>
                        </h2>
                        <form className='p-2' onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='username'><h5>Name:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name='username' 
                                            placeholder="Enter your name" 
                                            value={username} 
                                            onChange={(e) => setUsername(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='email'><h5>Email:</h5></label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name='email' 
                                            placeholder="Enter your email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='dob'><h5>DOB:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="dob" 
                                            placeholder="Enter your date of birth" 
                                            value={dob} 
                                            onChange={(e) => setDob(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='gender'><h5>Gender:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="gender" 
                                            placeholder="Enter your gender" 
                                            value={gender} 
                                            onChange={(e) => setGender(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='city'><h5>City:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="city" 
                                            placeholder="Enter your city" 
                                            value={city} 
                                            onChange={(e) => setCity(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='contact'><h5>Contact Number:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="contact" 
                                            placeholder="Enter your contact number" 
                                            value={contact} 
                                            onChange={(e) => setContact(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='role'><h5>Role:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="role" 
                                            placeholder="Enter your role" 
                                            value={role} 
                                            onChange={(e) => setRole(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='degree'><h5>Degree:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="degree" 
                                            placeholder="Enter your degree" 
                                            value={degree} 
                                            onChange={(e) => setDegree(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='department'><h5>Department:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="department" 
                                            placeholder="Enter your department" 
                                            value={department} 
                                            onChange={(e) => setDepartment(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='accountNumber'><h5>Account Number:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="accountNumber" 
                                            placeholder="Enter your account number" 
                                            value={accountNumber} 
                                            onChange={(e) => setAccountNumber(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='salary'><h5>Salary:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="salary" 
                                            placeholder="Enter your salary" 
                                            value={salary} 
                                            onChange={(e) => setSalary(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-2'>
                                <button type='submit' className="btn btn-success btn-block">Update</button>
                            </div>
                        </form>
                        <p className='text-center'><Link to="/" className='text-black text-decoration-none'><i className="fa-solid fa-arrow-left"></i> Back to homepage</Link></p>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default EditEmployee;