import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Attendance = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://hrmd-backend.onrender.com/api/getAttendanceList");
            setAttendanceRecords(response.data.result);
        } catch (error) {
            console.error('Error fetching attendance records:', error);
        }
    };

    return (
        <div className="container mt-5 ">
            <h3>Attendance list :</h3>
            <table className="table table-striped text-center table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>id</th>
                        <th>Employee Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record, index) => (
                        <tr key={record._id}>
                            <td>{index + 1}</td>
                            <td>{record.username}</td>
                            <td>{new Date(record.date).toLocaleDateString()}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Attendance;

