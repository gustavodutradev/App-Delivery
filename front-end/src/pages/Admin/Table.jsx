import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default function Table() {
  return (
    <fieldset>
      <table
        align="center"
        bgcolor="silver"
        border="5"
        cellPadding="10"
        cellSpacing="5"
      >
        <TableHeader />
        <TableBody />
      </table>
    </fieldset>
  );
}
