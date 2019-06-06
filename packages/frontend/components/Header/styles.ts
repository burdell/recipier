import styled from '@emotion/styled';

import { slate } from '../colors';

export const HeaderStyles = styled.div`
  font-family: 'Kameron';

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${slate};
  box-shadow: 0px 2px 3px 0px rgba(230, 230, 230, 1);
  padding: 0 0.5rem;

  a {
    text-decoration: none;
  }
`;

export const AppName = styled.h1`
  display: inline-block;
  font-size: 4rem;
`;
