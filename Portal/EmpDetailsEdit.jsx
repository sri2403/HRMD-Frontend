import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmpDetailsEdit = () => {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');
    const [role, setRole] = useState('');
    const [degree, setDegree] = useState('');
    const [department, setDepartment] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://hrmd-backend.onrender.com/api/getEmployee/${id}`);
            const {
                username,
                email,
                dob,
                gender,
                city,
                contact,
                role,
                degree,
                department,
                accountNumber,
                salary,
            } = res.data.result;
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
        } catch (err) {
            console.error('Error fetching employee details:', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            username,
            email,
            dob,
            gender,
            city,
            contact,
            role,
            degree,
            department,
            accountNumber,
            salary,
        };
        try {
            const res = await axios.put(
                `https://hrmd-backend.onrender.com/api/updateEmployee/${id}`,
                payload
            );
            toast.success(res.data.message);
            navigate(`/employeePortal/${id}/personalDetails`);
        } catch (err) {
            console.error('Error updating employee details:', err);
            toast.error(err.response.data.message);
        }
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Update Employee</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor="username" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor="dob" className="form-label">
                                    DOB
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dob"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="gender" className="form-label">
                                    Gender
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label">
                                    City
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="contact" className="form-label">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contact"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor="role" className="form-label">
                                    Role
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="degree" className="form-label">
                                    Degree
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="degree"
                                    value={degree}
                                    onChange={(e) => setDegree(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="department" className="form-label">
                                    Department
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="department"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="accountNumber" className="form-label">
                                    Account Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="accountNumber"
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                                <label htmlFor="salary" className="form-label">
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="salary"
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary me-2">
                                Update
                            </button>
                            <Link to={`/employeePortal/${id}/personalDetails`} className="btn btn-secondary">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmpDetailsEdit;
