import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateJobpost = () => {
    const [role, setRole] = useState('');
    const [experience, setExperience] = useState('');
    const [requiredSkills, setRequiredSkills] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://hrmd-backend.onrender.com/api/createJobpost', {
                role,
                experience,
                requiredSkills, 
                companyName,
                location
            });

            toast.success(response.data.message); // Display success message
            setRole('');
            setExperience('');
            setRequiredSkills('');
            setCompanyName('');
            setLocation('');
        } catch (error) {
            console.error('Error creating job post:', error);
            toast.error(error.response.data.message); // Display error message
        }
    };

    return (
        <div className="container mt-5">
            <div className="form-container d-flex justify-content-center">
                <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
                    <h3 className="mb-4 text-center">Create Job Post</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Role:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Experience:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Required Skills (comma separated):</label>
                            <input
                                type="text"
                                className="form-control"
                                value={requiredSkills}
                                onChange={(e) => setRequiredSkills(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Company Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Location:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success w-50">Create Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateJobpost;
