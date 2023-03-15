import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

// styles
import STable from './styles/STable';

export default function Table() {
  return (
    <STable>
      <TableHeader />
      <TableBody />
    </STable>
  );
}
