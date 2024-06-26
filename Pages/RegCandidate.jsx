import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../Context/AuthContext';
import "./empReg.css";

const RegCandidate = () => {
    const { registerCandidate } = useContext(AuthContext);

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        dob: Yup.string().required('Date of Birth is required'),
        gender: Yup.string().required('Gender is required'),
        city: Yup.string().required('City is required'),
        contact: Yup.string().required('Contact Number is required'),
        college: Yup.string().required('College is required'),
        sslcMark: Yup.string().required('SSLC Mark is required'),
        hscMark: Yup.string().required('HSC Mark is required'),
        degree: Yup.string().required('Degree is required'),
        department: Yup.string().required('Department is required'),
        cgpa: Yup.string().required('CGPA is required'),
        experience: Yup.string().required('Experience is required'),
        domain: Yup.string().required('Domain is required'),
        skills: Yup.string().required('Skills are required'),
        expectedSalary: Yup.string().required('Expected Salary is required')
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            dob: '',
            gender: '',
            city: '',
            contact: '',
            college: '',
            sslcMark: '',
            hscMark: '',
            degree: '',
            department: '',
            cgpa: '',
            experience: '',
            domain: '',
            skills: '',
            expectedSalary: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await registerCandidate(
                values.username,
                values.email,
                values.password,
                values.dob,
                values.gender,
                values.city,
                values.contact,
                values.college,
                values.sslcMark,
                values.hscMark,
                values.degree,
                values.department,
                values.cgpa,
                values.experience,
                values.domain,
                values.skills,
                values.expectedSalary
            );
            formik.resetForm();
        }
    });

    return (
        <div className="container-fluid two p-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h2 className="card-title text-center p-2">
                            <strong><i className="fa-solid fa-user"></i> Register as Candidate</strong>
                        </h2>
                        <form className='p-2' onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='username'><h5>Name:</h5></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='username'
                                            placeholder="Enter your name"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.username && formik.errors.username ? (
                                            <div className="text-danger">{formik.errors.username}</div>
                                        ) : null}
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
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-danger">{formik.errors.email}</div>
                                        ) : null}
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
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.password && formik.errors.password ? (
                                            <div className="text-danger">{formik.errors.password}</div>
                                        ) : null}
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
                                            value={formik.values.dob}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.dob && formik.errors.dob ? (
                                            <div className="text-danger">{formik.errors.dob}</div>
                                        ) : null}
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
                                            value={formik.values.gender}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.gender && formik.errors.gender ? (
                                            <div className="text-danger">{formik.errors.gender}</div>
                                        ) : null}
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
                                            value={formik.values.city}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.city && formik.errors.city ? (
                                            <div className="text-danger">{formik.errors.city}</div>
                                        ) : null}
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
                                            value={formik.values.contact}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.contact && formik.errors.contact ? (
                                            <div className="text-danger">{formik.errors.contact}</div>
                                        ) : null}
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
                                            value={formik.values.college}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.college && formik.errors.college ? (
                                            <div className="text-danger">{formik.errors.college}</div>
                                        ) : null}
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
                                            value={formik.values.sslcMark}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.sslcMark && formik.errors.sslcMark ? (
                                            <div className="text-danger">{formik.errors.sslcMark}</div>
                                        ) : null}
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
                                            value={formik.values.hscMark}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.hscMark && formik.errors.hscMark ? (
                                            <div className="text-danger">{formik.errors.hscMark}</div>
                                        ) : null}
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
                                            value={formik.values.degree}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.degree && formik.errors.degree ? (
                                            <div className="text-danger">{formik.errors.degree}</div>
                                        ) : null}
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
                                            value={formik.values.department}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.department && formik.errors.department ? (
                                            <div className="text-danger">{formik.errors.department}</div>
                                        ) : null}
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
                                            value={formik.values.cgpa}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.cgpa && formik.errors.cgpa ? (
                                            <div className="text-danger">{formik.errors.cgpa}</div>
                                        ) : null}
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
                                            value={formik.values.experience}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.experience && formik.errors.experience ? (
                                            <div className="text-danger">{formik.errors.experience}</div>
                                        ) : null}
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
                                            value={formik.values.domain}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        >
                                            <option value="">Select your domain</option>
                                            <option value="UI/UX">UI/UX</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="AI">AI</option>
                                        </select>
                                        {formik.touched.domain && formik.errors.domain ? (
                                            <div className="text-danger">{formik.errors.domain}</div>
                                        ) : null}
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
                                            value={formik.values.skills}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.skills && formik.errors.skills ? (
                                            <div className="text-danger">{formik.errors.skills}</div>
                                        ) : null}
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
                                            value={formik.values.expectedSalary}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.expectedSalary && formik.errors.expectedSalary ? (
                                            <div className="text-danger">{formik.errors.expectedSalary}</div>
                                        ) : null}
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
