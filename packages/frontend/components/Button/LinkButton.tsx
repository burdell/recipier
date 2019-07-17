import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Link, { LinkProps } from 'next/link';

import { BaseButton } from './Button';
import { primary, tertiary } from '../../design/colors';

const Button = styled.button`
  ${BaseButton}
  border-bottom: 1px solid ${primary.primary1};

  :hover, :active {
    color: ${primary.primary3};
    border-bottom: 1px solid ${tertiary.tertiary3};    
  }

  :focus {
    outline: none;
  }
`;

export function LinkButton({
  children,
  ...linkProps
}: LinkProps & { children: ReactNode }) {
  return (
    <Link {...linkProps}>
      <Button>{children}</Button>
    </Link>
  );
}
