import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditDetailsCand = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState('');
    const [college, setCollege] = useState('');
    const [sslcMark, setSslcMark] = useState('');
    const [hscMark, setHscMark] = useState('');
    const [degree, setDegree] = useState('');
    const [department, setDepartment] = useState('');
    const [cgpa, setCgpa] = useState('');
    const [experience, setExperience] = useState('');
    const [domain, setDomain] = useState('');
    const [skills, setSkills] = useState('');
    const [expectedSalary, setExpectedSalary] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://hrmd-backend.onrender.com/api/getCandidateById/${id}`);
            const { username, email, dob, gender, city, experience, contact, college, sslcMark, hscMark, degree, department, cgpa, domain, skills, expectedSalary } = response.data.result;
            
            setUsername(username);
            setEmail(email);
            setDob(dob);
            setGender(gender);
            setCity(city);
            setContact(contact);
            setCollege(college);
            setSslcMark(sslcMark);
            setHscMark(hscMark);
            setDegree(degree);
            setDepartment(department);
            setCgpa(cgpa);
            setExperience(experience);
            setDomain(domain);
            setSkills(skills);
            setExpectedSalary(expectedSalary);
        } catch (error) {
            console.error('Error fetching candidate details:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            username, email, password, dob, gender, city, contact, college, sslcMark, hscMark, degree, department, cgpa, experience, domain, skills, expectedSalary
        };

        try {
            const response = await axios.put(`https://hrmd-backend.onrender.com/api/updateCandidate/${id}`, payload);
            toast.success(response.data.message);
            navigate(`/candidatePortal/${id}/personalDetails`);
        } catch (error) {
            console.error('Error updating candidate details:', error);
            toast.error(error.response?.data?.message || 'Failed to update candidate details');
        }
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-center" >Update-details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">New Password  (Only if you want to update,otherwise skip it)</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="dob" className="form-label">DOB</label>
                                <input type="text" className="form-control" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <input type="text" className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="contact" className="form-label">Contact</label>
                                <input type="text" className="form-control" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="college" className="form-label">College</label>
                                <input type="text" className="form-control" id="college" value={college} onChange={(e) => setCollege(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="sslcMark" className="form-label">SSLC Mark (in %)</label>
                                <input type="text" className="form-control" id="sslcMark" value={sslcMark} onChange={(e) => setSslcMark(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="hscMark" className="form-label">HSC Mark (in %)</label>
                                <input type="text" className="form-control" id="hscMark" value={hscMark} onChange={(e) => setHscMark(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="degree" className="form-label">Degree</label>
                                <input type="text" className="form-control" id="degree" value={degree} onChange={(e) => setDegree(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="department" className="form-label">Department</label>
                                <input type="text" className="form-control" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="cgpa" className="form-label">CGPA (Out of 10)</label>
                                <input type="text" className="form-control" id="cgpa" value={cgpa} onChange={(e) => setCgpa(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="experience" className="form-label">Experience</label>
                                <input type="text" className="form-control" id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="domain" className="form-label">Domain</label>
                                <input type="text" className="form-control" id="domain" value={domain} onChange={(e) => setDomain(e.target.value)} required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="skills" className="form-label">Skills</label>
                                <input type="text" className="form-control" id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="expectedSalary" className="form-label">Expected Salary</label>
                                <input type="text" className="form-control" id="expectedSalary" value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} required />
                            </div>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary me-2">Update</button>
                            <Link to={`/candidatePortal/${id}/personalDetails`} className="btn btn-secondary">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditDetailsCand;
