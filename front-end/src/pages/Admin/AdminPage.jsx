import React from 'react';
import NavBar from '../../components/NavBar';
import AdminRegisterForm from './AdminRegisterForm';
import Table from './Table';

import Admin from './styles/SAdmin';

function AdminPage() {
  return (
    <Admin>
      <NavBar />
      <AdminRegisterForm />
      <Table />
    </Admin>
  );
}

export default AdminPage;
