import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { primary, grays } from '../../design/colors';

const InputStyles = styled.input`
  outline: none;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid ${grays.gray7};
  transition: all 0.3s ease-in-out;

  :focus {
    box-shadow: 0 0 4px ${primary.primary8};
    border-color: ${primary.primary8};
  }
`;

export function Input({ ...htmlProps }: InputHTMLAttributes<HTMLInputElement>) {
  return <InputStyles {...htmlProps} />;
}
