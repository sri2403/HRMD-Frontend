import React from 'react';

const EmployeeHomepage = () => {
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title text-center mb-4">Welcome to the Employee Portal!</h1>
                    <p className="card-text text-center">
                        Here, you'll find access to a range of features tailored to your needs.
                    </p>
                    <p className="card-text text-center">
                        You can view and update your personal details, check your attendance records,
                        and conveniently apply for leave whenever necessary.
                    </p>
                    <p className="card-text text-center">
                        Feel free to explore the various tools and resources available to you through our portal.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeHomepage;
