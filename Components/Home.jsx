import React from 'react';
import "./home.css";
import Nav from './Nav';
import img1 from './images/img1.png';
import img2 from "./images/img2.png" ;
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

const Home = () => {
    return (
        <div className="container-fluid p-2">
        <Nav/>
        <h2 className="text-center text-black p-4"><i className="fa-solid fa-laptop"></i> Career Logins</h2>
        
        <div className="row align-items-center p-3 ">
            <div className="col-md-6 order-md-1">
                <p className="lead">Welcome to our website! This versatile platform is designed to cater to various users, including admins, candidates, and employees. Whether you're a fresh job seeker eager to start your career or an HR professional managing employee details, our portal offers a seamless experience for all. Whether you're navigating through job listings or managing your team's HR needs, our commitment to reliability and efficiency remains unwavering. </p>
            </div>
            <div className="col-md-6 order-md-2 text-center">
                <img src={img1} className="img-fluid rounded" alt="User login illustration" />
            </div>
        </div>
        
        <div className="row align-items-center p-3">
            <div className="col-md-6 text-center">
                <img src={img2} className="img-fluid rounded" alt="Job search illustration"/>
            </div>
            <div className="col-md-6">
                <p className="lead">For job seekers, you can easily register or log in to explore and apply for jobs that match your interests and qualifications. Our job portal features listings across various categories, making it simple to find opportunities that align with your career goals.Whether you're a job seeker or an HR professional, our portal is designed to meet your needs efficiently. We continuously strive to enhance our platform, incorporating feedback from our diverse user base to deliver a seamless experience. </p>
            </div>
        </div>
        
        <div className="row align-items-center p-3">
            <div className="col-md-6 order-md-1">
                <p className="lead">For HR professionals, our platform provides a robust management dashboard. Here, you can efficiently handle employee details, oversee performance, and manage various HR tasks. The admin section allows for comprehensive system management, including user account oversight and job posting management. Together, let's unlock new opportunities and empower your career ambitions with cutting-edge technology and personalized service.</p>
            </div>
            <div className="col-md-6 order-md-2 text-center">
                <img src={img3} className="img-fluid rounded" alt="HR dashboard illustration"/>
            </div>
        </div>
        
        <div className="row align-items-center p-3">
            <div className="col-md-6 text-center">
                <img src={img4} className="img-fluid rounded" alt="Secure login illustration"/>
            </div>
            <div className="col-md-6">
                <p className="lead">Designed with a user-friendly interface and secure login system, our website ensures smooth navigation and data protection. Thank you for choosing our platform to support your job search or HR management needs. We are committed to helping you achieve your objectives efficiently and effectively. Join us in shaping the future of career management and discover why thousands of users trust us to support their professional journeys. </p>
            </div>
        </div>
        <div className="container py-4">
            <div className="about-section bg-light p-4 rounded shadow">
                <h2 className='text-center ' >About Us</h2>
                <p className="lead">Hello everyone! We are dedicated to revolutionizing the way individuals connect with job opportunities and manage their careers. Founded with a vision to streamline the job search process for both fresh graduates and seasoned professionals, our platform offers a comprehensive job portal where users can seamlessly explore, apply, and manage job applications across diverse industries. We pride ourselves on providing a user-friendly interface, ensuring that navigating through job listings and managing career profiles is intuitive and efficient. Our commitment extends beyond job seekers; we also offer robust HR management tools for businesses to oversee employee details and optimize workforce performance. Whether you're looking to start your career journey or seeking efficient HR solutions, here we are to support your aspirations with innovative technology and personalized service.</p>
            </div>
        </div>

        <div className="row justify-content-center contact-section">
            <div className="col-md-6 text-center">
                <h2>Contact Us</h2>
                <p>Email: contact@example.com</p>
                <p>Phone: +1234567890</p>
                <p>Address: 123 Main St, City, Country</p>
            </div>
        </div>
        <div className="container-fluid bg-dark">
            <footer className="py-3 ">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
                </ul>
                <p className="text-center text-white">© 2024 Company, Inc</p>
            </footer>
        </div>


    </div>
    
    );
};

export default Home;