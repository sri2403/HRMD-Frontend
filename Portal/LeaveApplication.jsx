import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LeaveApplication = () => {
    const { id } = useParams();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { startDate, endDate, reason };

        try {
            const response = await axios.post(`https://hrmd-backend.onrender.com/api/applyLeave/${id}`, payload);
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error applying for leave:', error);
            toast.error(error.response?.data?.message || 'Failed to apply for leave');
        }
        setStartDate('');
        setEndDate('');
        setReason('');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-center bg-primary text-white">
                            <h3>Leave Application</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="startDate">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="startDate"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="endDate">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="endDate"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="reason">Reason</label>
                                    <textarea
                                        className="form-control"
                                        id="reason"
                                        rows="3"
                                        value={reason}
                                        onChange={(e) => setReason(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-success btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaveApplication;
