import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PersonalDetailsCand = () => {
    const { id } = useParams(); 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("");
    const[college, setCollege] = useState("");
    const [sslcMark, setSslcMark] = useState("");
    const [hscMark, setHscMark] = useState("");
    const [degree, setDegree] = useState("");
    const [department, setDepartment] = useState("");
    const[cgpa,setCgpa]=useState("")
    const [experience, setExperience] = useState(""); 
    const [domain, setDomain] = useState("");
    const [skills, setSkills] = useState("");
    const [expectedSalary, setExpectedSalary] = useState("");
    
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        await axios.get(`https://hrmd-backend.onrender.com/api/getCandidateById/${id}`)
        .then(res=>{
            setUsername(res.data.result.username);
            setEmail(res.data.result.email);
            setDob(res.data.result.dob);
            setGender(res.data.result.gender);
            setCity(res.data.result.city);
            setContact(res.data.result.contact);
            setCollege(res.data.result.college);
            setSslcMark(res.data.result.sslcMark);
            setHscMark(res.data.result.hscMark);
            setDegree(res.data.result.degree);
            setDepartment(res.data.result.department);
            setExperience(res.data.result.experience);
            setCgpa(res.data.result.cgpa);
            setDomain(res.data.result.domain);
            setSkills(res.data.result.skills);
            setExpectedSalary(res.data.result.expectedSalary);
        })
        .catch (error =>{
            console.error(error);
        })
    }
    
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Personal Details</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Username:</strong> {username}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Date of Birth:</strong> {dob}</p>
                            <p><strong>Gender:</strong> {gender}</p>
                            <p><strong>City:</strong> {city}</p>
                            <p><strong>Contact:</strong> {contact}</p>
                            <p><strong>College:</strong> {college}</p>
                            <p><strong>SSLC Mark:(in %)</strong> {sslcMark}</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>HSC Mark:(in %)</strong> {hscMark}</p>
                            <p><strong>Degree:</strong> {degree}</p>
                            <p><strong>Department:</strong> {department}</p>
                            <p><strong>CGPA:(Out of 10)</strong> {cgpa}</p>
                            <p><strong>Experience:</strong> {experience}</p>
                            <p><strong>Domain:</strong> {domain}</p>
                            <p><strong>Skills:</strong> {skills}</p>
                            <p><strong>Expected Salary:</strong> {expectedSalary}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to={`/candidatePortal/${id}/editDetails`} className="btn btn-primary">Edit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetailsCand;