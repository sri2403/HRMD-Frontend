import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = ({adminId}) => {
    const {id}=useParams();
    const [rating, setRating] = useState('');
    const [feedback, setFeedback] = useState('');
    const handleStarClick = (starNumber) => {
        setRating(starNumber);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const feedbackData = {rating,feedback};
        try {
            const response = await axios.post(`https://hrmd-backend.onrender.com/api/giveFeedback/${id}`, feedbackData);
            toast.success(response.data.message);
        } catch (error) {
            console.error('Error submitting feedback:', error);
            toast.error(error.response.data.message);
        }
        setRating("");
        setFeedback("");
    };

    return (
        <div className="container mt-5">
            <h3 className='text-center'>Feedback Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Your Experience<span style={{ color: 'red' }}>*</span></label><br />
                    <i className={`fa fa-star ${rating >= 1 ? 'checked' : ''}`} onClick={() => handleStarClick(1)} style={{ color: rating >= 1 ? 'gold' : 'black' }}></i>
                    <i className={`fa fa-star ${rating >= 2 ? 'checked' : ''}`} onClick={() => handleStarClick(2)} style={{ color: rating >= 2 ? 'gold' : 'black' }}></i>
                    <i className={`fa fa-star ${rating >= 3 ? 'checked' : ''}`} onClick={() => handleStarClick(3)} style={{ color: rating >= 3 ? 'gold' : 'black' }}></i>
                    <i className={`fa fa-star ${rating >= 4 ? 'checked' : ''}`} onClick={() => handleStarClick(4)} style={{ color: rating >= 4 ? 'gold' : 'black' }}></i>
                    <i className={`fa fa-star ${rating >= 5 ? 'checked' : ''}`} onClick={() => handleStarClick(5)} style={{ color: rating >= 5 ? 'gold' : 'black' }}></i>
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">Feedback:</label>
                    <textarea
                        className="form-control"
                        id="feedback"
                        rows="5"
                        value={feedback}
                        onChange={(e)=>setFeedback(e.target.value)}
                        placeholder="Enter feedback"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
