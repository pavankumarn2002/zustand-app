// src/App.js
import React from 'react';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import "./App.css"
const App = () => {
  return (
    <div>
      <h1>Employee CRUD with Zustand and API</h1>
      <AddEmployee />
      <UpdateEmployee />
      <EmployeeList />
    </div>
  );
};

export default App;
