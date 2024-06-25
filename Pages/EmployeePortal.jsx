import React, { useContext, useEffect } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeHomepage from '../Portal/EmployeeHomepage';
import EmployeeAttendance from '../Portal/EmployeeAttendance';
import LeaveApplication from '../Portal/LeaveApplication';
import PersonalDetails from '../Portal/PersonalDetails';
import EmpDetailsEdit from '../Portal/EmpDetailsEdit';
import { AuthContext } from '../Context/AuthContext';

const EmployeePortal = () => {
    const { id } = useParams();
    const { employeeToken } = useContext(AuthContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://hrmd-backend.onrender.com/api/employeeAuth/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${employeeToken}`
                },
            });
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <div>
            {employeeToken ? (
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                        <div className="container-fluid">
                            <h1 className="navbar-brand">Employee Portal</h1>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/employeePortal/${id}`}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/employeePortal/${id}/personalDetails`}>Personal Details</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/employeePortal/${id}/leaveApplication`}>Leave Application</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/employeePortal/${id}/attendance`}>Attendance</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/employeePortal/${id}/editDetails`}>Edit-details</Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <span className="nav-link"><Link to="/">Logout</Link></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main className="mt-4">
                        <Routes>
                            <Route path="/" element={<EmployeeHomepage />} />
                            <Route path="/personalDetails" element={<PersonalDetails />} />
                            <Route path="/leaveApplication" element={<LeaveApplication />} />
                            <Route path="/attendance" element={<EmployeeAttendance />} />
                            <Route path="/editDetails" element={<EmpDetailsEdit />} />
                        </Routes>
                    </main>
                </div>
            ) : (
                <h4 className='text-center p-4 m-4'>Please log in again to access the employee portal.</h4>
            )}
        </div>
    );
};

export default EmployeePortal;
