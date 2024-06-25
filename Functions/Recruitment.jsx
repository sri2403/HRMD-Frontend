import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Recruitment = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://hrmd-backend.onrender.com/api/candidatesWithJob");
            setCandidates(response.data.result);
        } catch (error) {
            console.error('Error fetching candidates:', error);
        }
    };

    const handleHire = async (id) => {
        try {
            const response = await axios.post(`https://hrmd-backend.onrender.com/api/candidateHired/${id}`);
            toast.success(response.data.message)
            setCandidates(prev => prev.filter(candidate => candidate._id !== id));
        } catch (error) {
            console.error('Error hiring candidate:', error);
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await axios.post(`https://hrmd-backend.onrender.com/api/candidateRejected/${id}`);
            toast.success(response.data.message)
            setCandidates(prev => prev.filter(candidate => candidate._id !== id));
        } catch (error) {
            console.error('Error rejecting candidate:', error);
        }
    };

    return (
        <div className="container py-4 ">
            <h3 className="mb-4">Recruitment</h3>
            <div className="table-responsive text-center">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Candidate Name</th>
                            <th>Skills</th>
                            <th>Experience</th>
                            <th>Expected Salary</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate, index) => (
                            <tr key={candidate._id}>
                                <td>{index + 1}</td>
                                <td>{candidate.username}</td>
                                <td>{candidate.skills}</td>
                                <td>{candidate.experience}</td>
                                <td>${candidate.expectedSalary}</td>
                                <td>
                                    {candidate.appliedJobs.map(job => (
                                        <div key={job._id}>
                                            {job.role}
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-success mr-2"
                                        onClick={() => handleHire(candidate._id)}
                                    >
                                        Hire
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleReject(candidate._id)}
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Recruitment;
