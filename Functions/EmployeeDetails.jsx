import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./empdetails.css";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EmployeeDetails = ({adminId}) => {
    const[employees,setEmployees]=useState([]);
    const navigate=useNavigate();
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        await axios.get("https://hrmd-backend.onrender.com/api/getAllEmployees")
        .then(res=>{
            setEmployees(res.data.result)
        })
        .catch(err=>console.log(err))
    }
    const handleEdit=(employeeId)=>{
        navigate(`/adminDashboard/${adminId}/editEmployee/${employeeId}`);
    }
    const handleDelete=async(id)=>{
        await axios.delete(`https://hrmd-backend.onrender.com/api/deleteEmployee/${id}`)
       .then(res=>{
         toast.success(res.data.message)
         setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== id));
        })
       .catch(err=>{
        console.log(err);
        toast.error(err.response.data.message)
       })
    }
    return (
        <div className="container mt-5 ">
            <h3 >Employee Details</h3>
            <table className="table text-center table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>City</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee ,index)=> (
                        <tr key={employee._id}>
                            <td>{index+1}</td>
                            <td>{employee.username}</td>
                            <td>{employee.email}</td>
                            <td>{employee.contact}</td>
                            <td>{employee.city}</td>
                            <td>{employee.department}</td>
                            <td>{employee.role}</td>                           
                            <td>${employee.salary}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-sm btn-primary" onClick={()=>handleEdit(employee._id)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(employee._id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeDetails;

