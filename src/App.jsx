import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCandidate from '../Pages/LoginCandidate';
import LoginEmployee from '../Pages/LoginEmployee';
import LoginAdmins from '../Pages/LoginAdmins';
import RegCandidate from '../Pages/RegCandidate';
import RegEmployee from '../Pages/RegEmployee';
import RegAdmin from '../Pages/RegAdmin';
import Home from '../Components/Home';
import { ToastContainer } from 'react-toastify';
import AdminDashboard from '../Pages/AdminDashboard';
import EmployeePortal from '../Pages/EmployeePortal';
import CandidatePortal from '../Pages/CandidatePortal';
import { AuthProvider } from '../Context/AuthContext';
import AdminFp from '../Pages/AdminFp';
import CandidateFp from '../Pages/CandidateFp';
import EmployeeFp from '../Pages/EmployeeFp';


const App = () => {
    
    return (
        <AuthProvider>
        <div>
            <div>
                <ToastContainer />
            </div>
            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/login/candidate' element={<LoginCandidate />} />
                <Route path='/login/employee' element={<LoginEmployee />} />
                <Route path='/login/admin' element={<LoginAdmins />} />
                <Route path='/register/candidate' element={<RegCandidate />} />
                <Route path='/register/employee' element={<RegEmployee />} />   
                <Route path='/register/admin' element={<RegAdmin />} />      
                <Route path='/adminDashboard/:id/*' element={<AdminDashboard />} />
                <Route path="/employeePortal/:id/*" element={<EmployeePortal />} /> 
                <Route path="/candidatePortal/:id/*" element={<CandidatePortal />} /> 
                <Route path="/admin-forgot-password" element={<AdminFp />} />
                <Route path="/candidate-forgot-password" element={<CandidateFp />} />
                <Route path="/employee-forgot-password" element={<EmployeeFp />} />
            </Routes>
        </div>
        </AuthProvider>
    );
};

export default App;