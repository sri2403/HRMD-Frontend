import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './empReg.css';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const RegEmployee = () => {
    const { registerEmployee } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            dob: '',
            gender: '',
            city: '',
            contact: '',
            degree: '',
            department: '',
            role: '',
            accountNumber: '',
            salary: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
            dob: Yup.string().required('Date of birth is required'),
            gender: Yup.string().required('Gender is required'),
            city: Yup.string().required('City is required'),
            contact: Yup.string().required('Contact no is required'),
            degree: Yup.string().required('Degree is required'),
            department: Yup.string().required('Department is required'),
            role: Yup.string().required('Role is required'),
            accountNumber: Yup.string().min(13, 'Password must be at least 13 characters').required('Account number is required'),
            salary: Yup.number().required('Salary is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            registerEmployee(values.username, values.email, values.password, values.dob, values.gender, values.city, values.contact, values.degree, values.department, values.role, values.accountNumber, values.salary);
            resetForm();
        },
    });

    return (
        <div className="container-fluid two p-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h2 className="card-title text-center p-2">
                            <strong><i className="fa-solid fa-user"></i> Register as Employee</strong>
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
                                        <label htmlFor='role'><h5>Role:</h5></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="role"
                                            placeholder="Enter your role"
                                            value={formik.values.role}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.role && formik.errors.role ? (
                                            <div className="text-danger">{formik.errors.role}</div>
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
                                        <label htmlFor='accountNumber'><h5>Account Number:</h5></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="accountNumber"
                                            placeholder="Enter your account number"
                                            value={formik.values.accountNumber}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.accountNumber && formik.errors.accountNumber ? (
                                            <div className="text-danger">{formik.errors.accountNumber}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor='salary'><h5>Salary:(without commas)</h5></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="salary"
                                            placeholder="Enter your salary(in Rs)"
                                            value={formik.values.salary}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            required
                                        />
                                        {formik.touched.salary && formik.errors.salary ? (
                                            <div className="text-danger">{formik.errors.salary}</div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className='text-center mt-2'>
                                <button type='submit' className="btn btn-success btn-block">Sign Up</button>
                            </div>
                            <p className="mt-3 text-center">Already have an account? <Link to="/login/employee" className='text-decoration-none'>Login here</Link></p>
                        </form>
                        <p className='text-center'><Link to="/" className='text-black text-decoration-none'><i className="fa-solid fa-arrow-left"></i> Back to homepage</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegEmployee;
