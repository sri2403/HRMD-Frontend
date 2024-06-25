import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Dashboard = () => {
    const [adminData, setAdminData] = useState([]);
    const [candidateData, setCandidateData] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);
    const[employees,setEmployees]=useState([]);
    const [totalSalary, setTotalSalary] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
            await axios.get('https://hrmd-backend.onrender.com/api/getAllAdmin',)
            .then(res=>{
                setAdminData(res.data.totalCount);
            })
            .catch(err => {
                console.error('Error fetching admin data:', err);
            })
            
            await axios.get('https://hrmd-backend.onrender.com/api/getAllCandidates')
            .then(res=>{
                setCandidateData(res.data.totalCount);
            })
            .catch(err => {
                console.error('Error fetching admin data:', err);
            })

            await axios.get('https://hrmd-backend.onrender.com/api/getAllEmployees')
            .then(res=>{
                setEmployeeData(res.data.totalCount);
            })
            .catch(err => {
                console.error('Error fetching admin data:', err);
            })

            await axios.get("https://hrmd-backend.onrender.com/api/getAllEmployees")
            .then(res=>{
                setEmployees(res.data.result)
                const total = res.data.result.reduce((acc, employee) => acc + employee.salary, 0);
                setTotalSalary(total);
            })
            .catch(err=>console.log(err))
    };

    return (
        <div
            className="dashboard"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                padding: '20px',
            }}
        >
            <div
                className="card"
                style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    margin: '10px',
                    padding: '20px',
                    width: '200px',
                    textAlign: 'center',
                }}
            >
                <strong
                    style={{
                        fontSize: '18px',
                        color: '#333',
                    }}
                >
                    Admins
                </strong>
                <p
                    style={{
                        fontSize: '16px',
                        color: '#666',
                    }}
                >
                    Total count: {adminData}
                </p>
            </div>

            <div
                className="card"
                style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    margin: '10px',
                    padding: '20px',
                    width: '200px',
                    textAlign: 'center',
                }}
            >
                <strong
                    style={{
                        fontSize: '18px',
                        color: '#333',
                    }}
                >
                    Candidates
                </strong>
                <p
                    style={{
                        fontSize: '16px',
                        color: '#666',
                    }}
                >
                    Total Count: {candidateData}
                </p>
            </div>

            <div
                className="card"
                style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    margin: '10px',
                    padding: '20px',
                    width: '200px',
                    textAlign: 'center',
                }}
            >
                <strong
                    style={{
                        fontSize: '18px',
                        color: '#333',
                    }}
                >
                    Employees
                </strong>
                <p
                    style={{
                        fontSize: '16px',
                        color: '#666',
                    }}
                >
                    Total Count: {employeeData}
                </p>
            </div>

            <div
                className="card"
                style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    margin: '10px',
                    padding: '20px',
                    width: '200px',
                    textAlign: 'center',
                }}
            >
                <strong
                    style={{
                        fontSize: '18px',
                        color: '#333',
                    }}
                >
                    Gross Earnings
                </strong>
                <p
                    style={{
                        fontSize: '16px',
                        color: '#666',
                    }}
                >
                    Total: ${totalSalary}
                </p>
            </div>
            <div class="container mt-5">
        <div class="card">
            <div class="card-header bg-success text-white">
                Hello Admin,
            </div>
            <div class="card-body">
                <h5 class="card-title">You have the following capabilities:</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Perform CRUD (Create, Read, Update, Delete) operations on employee details.</li>
                    <li class="list-group-item">Accept or reject employees' leave requests.</li>
                    <li class="list-group-item">Monitor attendance.</li>
                    <li class="list-group-item">Manage salary payments.</li>
                    <li class="list-group-item">Handle ratings and feedback.</li>
                    <li class="list-group-item">Create new job postings.</li>
                    <li class="list-group-item">Make hiring decisions, including accepting or rejecting candidates.</li>
                </ul>
            </div>
            <div class="card-footer text-muted">
                Here you go!
            </div>
        </div>
    </div>
        </div>
    );
};

export default Dashboard;
