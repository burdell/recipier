import React from 'react';

interface Props {
  id: string;
}

export const Recipe = ({ id }: Props) => <div>The recipe id is {id}</div>;
