// src/components/AddEmployee.js
import React, { useState } from 'react';
import useEmployeeStore from '../store';

const AddEmployee = () => {
  const { addEmployee } = useEmployeeStore();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { id: Date.now(), name, position };
    addEmployee(newEmployee);
    setName('');
    setPosition('');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
        className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        className="input"
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button className="btn btn-succes" type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddEmployee;
