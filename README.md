# HRMD -Frontend

## Overview 
HRMD-Frontend is a web application designed to integrate seamlessly with the HRMD-Backend API, providing a user-friendly interface for managing HR and administrative tasks. It leverages modern frontend technologies to deliver a responsive and intuitive experience for administrators, employees, and candidates.

## Authentication and Authorization:

- Allows admins, employees, and candidates to securely log in (/login/admin, /login/employee, /login/candidate) and manage their profiles (/register/admin, /register/employee, /register/candidate).

- Utilizes tokens from backend authentication (AuthProvider) to ensure secure access to various features and data.

## Candidate Portal
The candidate portal provides access to personal details for viewing and updating, as well as a wide array of job listings tailored to your role, enabling seamless application processes.

## Employee Portal 
The employee portal allows viewing and updating of personal details, facilitates leave application, and manages attendance records.

## Admin Dashboard
The admin panel facilitates CRUD operations for employees, monitors attendance, manages leave requests, processes employee payments, provides feedback, creates job posts, conducts performance evaluations, and oversees recruitment by tracking candidate applications.

## Backend Link
Go to=>https://github.com/sri2403/HRMD-Backend.git

## Netlify Link
Go to=>https://hrmd-frontend-sri2403.netlify.app/