import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Jobposts = ({candidateId}) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://hrmd-backend.onrender.com/api/getAllJobs");
            setJobs(res.data.result);
        } catch (err) {
            console.log(err);
        }
    };

    const handleApply=async(jobId)=>{
        const payload={candidateId,jobId};
        await axios.post("https://hrmd-backend.onrender.com/api/applyJob",payload)
       .then(res=>{
        toast.success(res.data.message)
       })
       .catch(err=>{
        console.log(err)
        toast.error(err.response.data.message)
       })
    }
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Job Posts</h1>
            <div className="row">
                {jobs.map((job) => (
                    <div className="col-md-4 mb-4" key={job._id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title"><strong>{job.role}</strong></h4>
                                <h6 className="card-subtitle mb-2 ">{job.companyName}</h6>
                                <p className="card-text"><strong>Experience:</strong> {job.experience}</p>
                                <p className="card-text"><strong>Skills Required:</strong> {job.requiredSkills}</p>
                                <p className="card-text"><strong>Location:</strong> {job.location}</p>
                                <div className='text-center'>
                                    <button className="btn btn-success" onClick={() => handleApply(job._id)}>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobposts;
