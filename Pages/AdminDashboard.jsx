import React, { useContext, useEffect, useState } from 'react';
import { Link,Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Dashboard from '../Functions/Dashboard';
import EmployeeDetails from '../Functions/EmployeeDetails';
import LeaveManagement from '../Functions/LeaveManagement';
import Performance from '../Functions/Performance';
import Recruitment from '../Functions/Recruitment';
import Attendance from '../Functions/Attendance';
import './dashboard.css';
import CreateEmployee from '../Functions/CreateEmployee';
import EditEmployee from '../Functions/EditEmployee';
import FeedbackForm from '../Functions/FeedbackForm';
import Payroll from '../Functions/Payroll';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateJobpost from '../Functions/CreateJobpost';
import { AuthContext } from '../Context/AuthContext';

const AdminDashboard = () => {
    const navigate=useNavigate();
    const[op,setOp]=useState("");
    const {id} = useParams(); 
    const { adminToken } = useContext(AuthContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://hrmd-backend.onrender.com/api/adminAuth/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${adminToken}`
                },
            });
            setOp(response.data.data);
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div>
            {adminToken ? (
        <div className="container-fluid">
            <div className="row">
            <nav id="sidebar" className="col-md-3 p-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className='text-center text-black'>
                        <h3><strong>Hii, {op.username}</strong></h3>
                    </li>
                    <hr />
                    <li className="nav-item">
                        <Link className="nav-link text-black" to={`/adminDashboard/${id}`}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to={`/adminDashboard/${id}/employees`}>Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to={`/adminDashboard/${id}/leave`}>Leave Requests</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to={`/adminDashboard/${id}/attendance`}>Attendance</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to={`/adminDashboard/${id}/payment`}>Payroll</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to={`/adminDashboard/${id}/feedbacks`}>Feedbacks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to={`/adminDashboard/${id}/createJob`}>Create Jobposts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to={`/adminDashboard/${id}/recruitment`}>Recruitment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-black" to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="container-fluid">
                        <div>
                        <h2 className="mt-4 text-center text-black">ΉЯMD Careers- Admin Dashboard</h2>
                        <button className="btn btn-success text-end" onClick={()=>navigate(`/adminDashboard/${id}/createEmployee`)}>Create Employee</button>
                        </div>
                        <hr />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/createEmployee" element={<CreateEmployee adminId={id}/>} />
                            <Route path='/editEmployee/:id' element={<EditEmployee adminId={id}/>} />
                            <Route path="/employees" element={<EmployeeDetails adminId={id}/>} />
                            <Route path="/leave" element={<LeaveManagement />} />
                            <Route path="/feedbacks" element={<Performance adminId={id} />} />
                            <Route path="/feedbackform/:id" element={<FeedbackForm />} />
                            <Route path="/recruitment" element={<Recruitment />} />
                            <Route path="/attendance" element={<Attendance />} />
                            <Route path="/payment" element={<Payroll />} />
                            <Route path="/createJob" element={<CreateJobpost/>} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
        ) : (
            <h4 className='text-center p-4 m-4'>Please log in again to access the admin dashboard.</h4>
        )}
    </div>
    );
};

export default AdminDashboard;
