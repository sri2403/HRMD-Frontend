import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payroll = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get("https://hrmd-backend.onrender.com/api/getAllEmployeesWithPaystatus");
            setEmployees(res.data.result);
        } catch (err) {
            console.log(err);
        }
    };

    const handlePay = async (id) => {
        try {
            const res = await axios.post(`https://hrmd-backend.onrender.com/api/pay/${id}`);
            toast.success(res.data.message);
            fetchData(); // Refresh the data after payment
        } catch (err) {
            console.log(err);
            toast.error(err.response?.data?.message || "Payment failed");
        }
    };

    return (
        <div className="container mt-5 ">
            <h3 className=" mb-4">Payment Details</h3>
            <table className="table text-center table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee._id}>
                            <td>{index + 1}</td>
                            <td>{employee.username}</td>
                            <td>{employee.role}</td>
                            <td>${employee.salary}</td>
                            <td>
                                {employee.payrolls.length > 0 ? employee.payrolls[employee.payrolls.length - 1].status : "Pending"}
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-success"
                                    onClick={() => handlePay(employee._id)}
                                    disabled={employee.payrolls.length > 0 && employee.payrolls[employee.payrolls.length - 1].status === "Paid"}
                                >
                                    Pay
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Payroll;
