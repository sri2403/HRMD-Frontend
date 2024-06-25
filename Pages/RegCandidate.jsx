import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import "./empReg.css";
import { AuthContext } from '../Context/AuthContext';

const RegCandidate = () => {
    const{registerCandidate,username,email,setEmail,password,setPassword,setUsername,dob,setDob,gender,setGender,city,contact,college,setCity,setContact,setCollege,sslcMark,setSslcMark,hscMark,setHscMark,degree,setDegree,department,setDepartment,cgpa,setCgpa,experience,setExperience,domain,setDomain,skills,setSkills,expectedSalary,setExpectedSalary}=useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        registerCandidate(username, email, password, dob, gender, city, contact, college, sslcMark, hscMark, degree, department, cgpa, experience, domain, skills,expectedSalary )   
        setUsername('');
        setEmail('');
        setPassword('');
        setDob('');
        setGender('');
        setCity('');
        setContact('');
        setCollege('');
        setSslcMark('');
        setHscMark('');
        setDegree('');
        setDepartment('');
        setCgpa('');
        setExperience(''); 
        setDomain('');
        setSkills('');
        setExpectedSalary('');
    };

    return (
        <div className="container-fluid two p-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h2 className="card-title text-center p-2">
                            <strong><i className="fa-solid fa-user"></i> Register as Candidate</strong>
                        </h2>
                        <form className='p-2' onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='username'><h5>Name:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name='username' 
                                            placeholder="Enter your name" 
                                            value={username} 
                                            onChange={(e) => setUsername(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='email'><h5>Email:</h5></label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name='email' 
                                            placeholder="Enter your email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='password'><h5>Password:</h5></label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            name="password" 
                                            placeholder="Enter your password" 
                                            value={password} 
                                            onChange={(e) => setPassword(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='dob'><h5>DOB:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="dob" 
                                            placeholder="Enter your date of birth" 
                                            value={dob} 
                                            onChange={(e) => setDob(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='gender'><h5>Gender:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="gender" 
                                            placeholder="Enter your gender" 
                                            value={gender} 
                                            onChange={(e) => setGender(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='city'><h5>City:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="city" 
                                            placeholder="Enter your city" 
                                            value={city} 
                                            onChange={(e) => setCity(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='contact'><h5>Contact Number:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="contact" 
                                            placeholder="Enter your contact number" 
                                            value={contact} 
                                            onChange={(e) => setContact(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='college'><h5>College:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="college" 
                                            placeholder="Enter your college name" 
                                            value={college} 
                                            onChange={(e) => setCollege(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='sslcMark'><h5>SSLC Mark:(in %)</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="sslcMark" 
                                            placeholder="Enter your SSLC mark" 
                                            value={sslcMark} 
                                            onChange={(e) => setSslcMark(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='hscMark'><h5>HSC Mark:(in %)</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="hscMark" 
                                            placeholder="Enter your HSC mark" 
                                            value={hscMark} 
                                            onChange={(e) => setHscMark(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='degree'><h5>Degree:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="degree" 
                                            placeholder="Enter your degree" 
                                            value={degree} 
                                            onChange={(e) => setDegree(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='department'><h5>Department:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="department" 
                                            placeholder="Enter your department" 
                                            value={department} 
                                            onChange={(e) => setDepartment(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='cgpa'><h5>CGPA:(Out of 10)</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="cgpa" 
                                            placeholder="Enter your CGPA" 
                                            value={cgpa} 
                                            onChange={(e) => setCgpa(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='experience'><h5>Experience (in years):</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="experience" 
                                            placeholder="Enter your experience" 
                                            value={experience} 
                                            onChange={(e) => setExperience(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='domain'><h5>Domain:</h5></label>
                                        <select
                                            className="form-control"
                                            name="domain"
                                            value={domain}
                                            onChange={(e) => setDomain(e.target.value)}
                                            required
                                        >
                                            <option value="">Select your domain</option>
                                            <option value="UI/UX">UI/UX</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="AI">AI</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='skills'><h5>Skills:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="skills" 
                                            placeholder="Enter your skills" 
                                            value={skills} 
                                            onChange={(e) => setSkills(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='expectedSalary'><h5>Expected Salary:</h5></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="expectedSalary" 
                                            placeholder="Enter your expected salary" 
                                            value={expectedSalary} 
                                            onChange={(e) => setExpectedSalary(e.target.value)} 
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-2'>
                                <button type='submit' className="btn btn-success btn-block">Sign Up</button>
                            </div>
                            <p className="mt-3 text-center">Already have an account? <Link to="/login/candidate" className='text-decoration-none'>Login here</Link></p>
                        </form>
                        <p className='text-center'><Link to="/" className='text-black text-decoration-none'><i className="fa-solid fa-arrow-left"></i> Back to homepage</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegCandidate;
