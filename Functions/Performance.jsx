import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Performance = ({adminId}) => {
    const [employees, setEmployees] = useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        try {
            const response = await axios.get("https://hrmd-backend.onrender.com/api/getAllEmployees");
            setEmployees(response.data.result);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    }
    const handleFeedback = (id) => {
        navigate(`/adminDashboard/${adminId}/feedbackform/${id}`);
    };
    return (
        <div className="container mt-5">
            <h1>All Employees</h1>
            <div className="row">
                {employees.map(employee => (
                    <div className="col-md-4 mb-4" key={employee._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"><strong>Username: </strong>{employee.username}</h5>
                                <p className="card-text"><strong>Email:</strong> {employee.email}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleFeedback(employee._id)}
                                >
                                    Give Feedback
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Performance;