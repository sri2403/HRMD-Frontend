import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const CandResetPassword = ({ candidateId, candidateToken }) => {
    const [newPassword, setNewPassword] = useState('');

    const handleApply = async () => {
        const payload = { newPassword };

        try {
            const response = await axios.post(`https://hrmd-backend.onrender.com/api/candidateResetPassword/${candidateId}/${candidateToken}`, payload);
            toast.success(response.data.message);
            setNewPassword('');
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message || "Something went wrong");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <h5 className="card-header bg-success text-white text-center">Candidate Password Reset</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="newPassword">New Password:</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        className="form-control"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Enter your new password"
                                    />
                                </div>
                                <div className="text-center p-2">
                                    <button className="btn btn-success btn-sm" onClick={handleApply}>Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandResetPassword;
