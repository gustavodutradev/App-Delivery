import React from 'react';
import NavBar from '../../components/NavBar';
import AdminRegisterForm from './AdminRegisterForm';
import Table from './Table';

function AdminPage() {
  return (
    <>
      <NavBar />
      <AdminRegisterForm />
      <Table />
    </>
  );
}

export default AdminPage;
