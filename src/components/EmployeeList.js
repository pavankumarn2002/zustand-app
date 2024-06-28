// src/components/EmployeeList.js
import React, { useEffect } from 'react';
import useEmployeeStore from '../store';

const EmployeeList = () => {
  const { employees, fetchEmployees, deleteEmployee } = useEmployeeStore();

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li className="list" key={employee.id}>
            {employee.name} - {employee.position}
            <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
