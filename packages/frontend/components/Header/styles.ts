import styled from '@emotion/styled';

import { primary, tertiary } from '../../design/colors';

export const HeaderStyles = styled.div`
  font-family: 'Kameron';

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: ${primary.primary1};
  padding: 0 0.5rem;

  a {
    text-decoration: none;
  }
`;

export const AppName = styled.h1`
  display: inline-block;
  font-size: 4rem;
  padding: 0 1rem;
  border-bottom: 1px solid ${tertiary.tertiary4};
  margin-right: 1rem;
`;
