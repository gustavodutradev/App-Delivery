import React from 'react';

const headers = ['Item', 'Nome', 'E-mail', 'Tipo', 'Excluir'];

export default function TableHeader() {
  return (
    <thead>
      <tr>
        { headers.map((element, index) => (
          <th key={ index }>{ element }</th>
        ))}
      </tr>
    </thead>
  );
}
