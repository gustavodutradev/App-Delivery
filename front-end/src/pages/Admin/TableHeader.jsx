import React from 'react';
import Headers from './styles/THeaders';

const headers = ['Item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];

export default function TableHeader() {
  return (
    <Headers>
      <tr>
        { headers.map((element, index) => (
          <th key={ index }>{ element }</th>
        ))}
      </tr>
    </Headers>
  );
}
