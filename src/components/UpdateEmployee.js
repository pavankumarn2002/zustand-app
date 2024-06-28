// src/components/UpdateEmployee.js
import React, { useState } from "react";
import useEmployeeStore from "../store";

const UpdateEmployee = () => {
    const { employees, updateEmployee } = useEmployeeStore();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const handleChange = async (id) => {
        await employees.filter((item) => {
            if (item.id === id) {
                setId(item.id);
                setName(item.name);
                setPosition(item.position);
            }
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedEmployee = { id, name, position };
        if(name==""&&position==""){
          alert("Please")
        }
        updateEmployee(id, updatedEmployee);
        setId("");
        setName("");
        setPosition("");
    };

    return (
        <div>
            <h2>Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <select className="select" onChange={(e) => handleChange(e.target.value)} value={id}>
                    <option value="">Select Employee</option>
                    {employees.map((emp) => (
                        <option key={emp.id} value={emp.id}>
                            {emp.name}
                        </option>
                    ))}
                </select>
                <input className="input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="input" type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
                <button className="btn  btn-primary" type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateEmployee;
