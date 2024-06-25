import axios from 'axios';
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const[username,setUsername]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [contact, setContact] = useState("");
    const [college, setCollege] = useState("");
    const [sslcMark, setSslcMark] = useState("");
    const [hscMark, setHscMark] = useState("");
    const [degree, setDegree] = useState("");
    const [department, setDepartment] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [experience, setExperience] = useState(""); 
    const [domain, setDomain] = useState("");
    const [skills, setSkills] = useState("");
    const [expectedSalary, setExpectedSalary] = useState("");
    const [role, setRole] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [salary, setSalary] = useState("");
    
    const [adminToken, setAdminToken] = useState('');
    const [employeeToken, setEmployeeToken] = useState('');
    const [candidateToken, setCandidateToken] = useState('');
    const navigate=useNavigate();

    const loginAdmin = async(email,password)=>{
        const payload = { email, password };
        await axios.post("https://hrmd-backend.onrender.com/api/adminLogin", payload)
          .then((res) => {
           toast.success(res.data.message);
            setAdminToken(res.data.token);
            navigate(`/adminDashboard/${res.data.id}`)
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message);
        });
    }
    const loginEmployee = async(email,password)=>{
        const payload = { email, password };
        await axios.post("https://hrmd-backend.onrender.com/api/employeeLogin", payload)
          .then((res) => {
           toast.success(res.data.message);
            setEmployeeToken(res.data.token);
            navigate(`/employeePortal/${res.data.id}`)
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message);
        });
    }
    const loginCandidate = async(email,password)=>{
        const payload = { email, password };
        await axios.post("https://hrmd-backend.onrender.com/api/candidateLogin", payload)
          .then((res) => {
           toast.success(res.data.message);
            setCandidateToken(res.data.token);
            navigate(`/candidatePortal/${res.data.id}`)
        })
        .catch((error) => {
            console.log(error);
            toast.error(error.response.data.message);
        });
    }
    const registerAdmin = async(username,email,password)=>{
        const payload={username,email,password}
        await axios.post("https://hrmd-backend.onrender.com/api/adminReg",payload)
        .then((res)=>{
            toast.success(res.data.message)
            navigate("/login/admin")
        })
        .catch((err)=>{
            console.log(err);
            toast.error(err.response.data.message)
        })
    }
    const registerCandidate = async(username, email, password, dob, gender, city, contact, college, sslcMark, hscMark, degree, department, cgpa, experience, domain, skills,expectedSalary )=>{
        const payload = { username, email, password, dob, gender, city, contact, college, sslcMark, hscMark, degree, department, cgpa, experience, domain, skills,expectedSalary };
        try {
            const res = await axios.post("https://hrmd-backend.onrender.com/api/candidateReg", payload);
            toast.success(res.data.message);
            navigate("/login/candidate");
        } catch (err) {
            console.error(err);
            toast.error(err.response.data.message);
        }
    }
    const registerEmployee = async(username, email, password, dob, gender, city, contact, degree, department,role,accountNumber,salary)=>{
        const payload = { username, email, password, dob, gender, city, contact, role, degree, department, accountNumber, salary };
        try {
            const res = await axios.post("https://hrmd-backend.onrender.com/api/employeeReg", payload);
            toast.success(res.data.message);
            navigate("/login/employee");
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
    }
    return(
        <AuthContext.Provider value={{adminToken,setAdminToken,employeeToken,setEmployeeToken,candidateToken,setCandidateToken,email,setEmail,password,setPassword,
        loginAdmin,loginEmployee,loginCandidate,registerAdmin,registerCandidate,username,setUsername,dob,setDob,gender,setGender,city,contact,college,setCity,setContact,
        setCollege,sslcMark,setSslcMark,hscMark,setHscMark,degree,setDegree,department,setDepartment,cgpa,setCgpa,experience,setExperience,domain,setDomain,skills,setSkills,
        expectedSalary,setExpectedSalary,setRole,role,accountNumber,setAccountNumber,salary,setSalary,registerEmployee}}>
            {children}
        </AuthContext.Provider>
    )
}