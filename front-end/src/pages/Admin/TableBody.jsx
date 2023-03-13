import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import axiosRequest from '../../utils/axios';

export default function TableBody() {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.user.token);

  const handleRequest = async () => {
    const { data } = await axiosRequest({ authorization: token }).get('/admin');
    setUsers(data);
  };

  const deleteUser = async (email) => {
    await axiosRequest({ authorization: token })
      .delete('/admin', { data: { email } });
  };

  useEffect(() => {
    handleRequest();
  }, [users]);

  return (
    <tbody align="center">
      { users.map(({ name, email, role }, index) => (
        <tr key={ index }>
          <td
            data-testid={ `admin_manage__element-user-table-item-number-${index}` }
          >
            { index }
          </td>
          <td
            data-testid={ `admin_manage__element-user-table-name-${index}` }
          >
            { name }
          </td>
          <td
            data-testid={ `admin_manage__element-user-table-email-${index}` }
          >
            { email }
          </td>
          <td
            data-testid={ `admin_manage__element-user-table-role-${index}` }
          >
            { role }
          </td>
          <td>
            <Button
              name="Excluir"
              data-testid={ `admin_manage__element-user-table-remove-${index}` }
              type="button"
              onClick={ () => deleteUser(email) }
              disabled={ false }
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
