// src/store.js
import create from 'zustand';
import axios from 'axios';

const useEmployeeStore = create((set) => ({
  employees: [],
  fetchEmployees: async () => {
    const response = await axios.get('http://localhost:5000/employees');
    set({ employees: response.data });
  },
  addEmployee: async (employee) => {
    const response = await axios.post('http://localhost:5000/employees', employee);
    set((state) => ({
      employees: [...state.employees, response.data],
    }));
  },
  updateEmployee: async (id, updatedEmployee) => {
    await axios.put(`http://localhost:5000/employees/${id}`, updatedEmployee);
    set((state) => ({
      employees: state.employees.map((emp) =>
        emp.id === id ? updatedEmployee : emp
      ),
    }));
  },
  deleteEmployee: async (id) => {
    await axios.delete(`http://localhost:5000/employees/${id}`);
    set((state) => ({
      employees: state.employees.filter((emp) => emp.id !== id),
    }));
  },
}));

export default useEmployeeStore;
