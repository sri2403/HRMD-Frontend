import React , { useContext, useEffect }from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import HomeCand from '../Cportal/HomeCand';
import PersonalDetailsCand from '../Cportal/PersonalDetailsCand';
import Jobposts from '../Cportal/Jobposts';
import EditDetailsCand from '../Cportal/EditDetailsCand';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthContext';
import CandResetPassword from '../Cportal/CandResetPassword';

const CandidatePortal = () => {
    const { candidateToken } = useContext(AuthContext);
    const { id } = useParams(); 
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://hrmd-backend.onrender.com/api/candidateAuth/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${candidateToken}`
                },
            });
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error(error.response.data.message);
        }
    };

    return (
        
        <div className=''>
            {candidateToken ? (
            <div className="container-fluid  ">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Candidate Portal</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/candidatePortal/${id}`}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/candidatePortal/${id}/personalDetails`}>Personal Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/candidatePortal/${id}/jobPosts`}>Job posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/candidatePortal/${id}/editDetails`}>Edit-details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/candidatePortal/${id}/resetPassword`}>Reset-password</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link"><Link to="/">Logout</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="mt-4">
                <Routes>
                    <Route path="/" element={<HomeCand/>} />
                    <Route path="/personalDetails" element={<PersonalDetailsCand />} />
                    <Route path="/jobPosts" element={<Jobposts candidateId={id} />} />
                    <Route path="/editDetails" element={<EditDetailsCand/>} />
                    <Route path="/resetPassword" element={<CandResetPassword candidateId={id} candidateToken={candidateToken}/>} />
                </Routes>
            </main>
        </div>
        ) : (
            <h4 className='text-center p-4 m-4'>Please log in again to access the candidate portal.</h4>
        )}
    </div>
    );
};

export default CandidatePortal;