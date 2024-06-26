import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegAdmin = () => {
    const { registerAdmin } = useContext(AuthContext);

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await registerAdmin(values.username, values.email, values.password);
            formik.resetForm();
        }
    });

    return (
        <div className="container-fluid two d-flex justify-content-center align-items-center vh-100">
            <div className="card">
                <div className="card-body p-4">
                    <h2 className="card-title text-center p-2">
                        <strong><i className="fa-solid fa-user"></i> Register as Admin</strong>
                    </h2>
                    <form className='p-2' onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor='username'><h6>Name:</h6></label>
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
                        <div className="form-group">
                            <label htmlFor='email'><h6>Email:</h6></label>
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
                        <div className="form-group">
                            <label htmlFor='password'><h6>Password:</h6></label>
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
                        <div className='text-center mt-2'>
                            <button type='submit' className="btn btn-success btn-block">Sign Up</button>
                        </div>
                        <p className="mt-3 text-center">Already have an account? <Link to="/login/admin" className='text-decoration-none'>Login here</Link></p>
                    </form>
                    <p className='text-center'><Link to="/" className='text-black text-decoration-none'><i className="fa-solid fa-arrow-left"></i> Back to homepage</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegAdmin;
