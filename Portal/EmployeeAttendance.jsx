import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeAttendance = () => {
    const { id } = useParams(); 
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { date, status };

        try {
            const response = await axios.post(`https://hrmd-backend.onrender.com/api/recordAttendance/${id}`, payload);
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error recording attendance:', error);
            toast.error(error.response?.data?.message || 'Failed to record attendance');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-center bg-primary text-white">
                            <h3>Attendance</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="status">Status</label>
                                    <select
                                        className="form-control"
                                        id="status"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        required
                                    >
                                        <option className='text-muted'>Select</option>
                                        <option value="Present">Present</option>
                                        <option value="Absent">Absent</option>
                                        <option value="On Leave">On Leave</option>
                                    </select>
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

export default EmployeeAttendance;
