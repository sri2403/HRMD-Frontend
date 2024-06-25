import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const LeaveManagement = () => {
    const [leaveRequests, setLeaveRequests] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://hrmd-backend.onrender.com/api/getLeaveRequests");
            setLeaveRequests(response.data.result);
        } catch (error) {
            console.error('Error fetching leave requests:', error);
            toast.error(error.response.data.message);
        }
    };

    const handleApprove = async (id) => {
        try {
            const response = await axios.put(`https://hrmd-backend.onrender.com/api/approve/${id}`);
            toast.success(response.data.message); 
            fetchData();
        } catch (error) {
            console.error('Failed to approve leave:', error);
            toast.error(error.response.data.message);
        }
    };

    const handleReject = async (leaveId) => {
        try {
            const response = await axios.put(`https://hrmd-backend.onrender.com/api/reject/${leaveId}`);
            toast.success(response.data.message); 
            fetchData(); 
        } catch (error) {
            console.error('Failed to reject leave:', error);
            toast.error(error.response.data.message);
        }
    };
    return (
        <div>
            <h3>Leave Requests</h3>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {leaveRequests.map((request,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{request.username}</td>
                            <td>{new Date(request.startDate).toLocaleDateString()}</td>
                            <td>{new Date(request.endDate).toLocaleDateString()}</td>
                            <td>{request.reason}</td>
                            <td>{request.status}</td>
                            <td>
                                {request.status === 'Pending' && (
                                    <>
                                        <button className="btn btn-success" onClick={() => handleApprove(request._id)}>Approve</button>
                                        <button className="btn btn-danger ms-2" onClick={() => handleReject(request._id)}>Reject</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaveManagement;
