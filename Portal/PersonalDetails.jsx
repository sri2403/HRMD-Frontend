import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const PersonalDetails = () => {
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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://hrmd-backend.onrender.com/api/getEmployee/${id}`);
            const { username,email, dob, gender, city, contact, role, degree, department, accountNumber, salary } = response.data.result;
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
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Personal Details</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Username:</strong> {username}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Date of Birth:</strong> {dob}</p>
                            <p><strong>Gender:</strong> {gender}</p>
                            <p><strong>City:</strong> {city}</p>
                            <p><strong>Contact:</strong> {contact}</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Role:</strong> {role}</p>
                            <p><strong>Degree:</strong> {degree}</p>
                            <p><strong>Department:</strong> {department}</p>
                            <p><strong>Account Number:</strong> {accountNumber}</p>
                            <p><strong>Salary:</strong> {salary}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to={`/employeePortal/${id}/editDetails`} className="btn btn-primary">Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
