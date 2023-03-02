import React from 'react';

type Props = {
    message: string,
    datatestId: string,
};

export default function ErrorMessage(p: Props) {
  return ( 
    <p
    datatest-id= { p.datatestId }
    >
        { p.message }
    </p>
  )
}
