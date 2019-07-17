import styled from '@emotion/styled';

import { primary, tertiary } from '../../design/colors';
import { leftColumn, mainContent } from '../Layout/styles';

export const HeaderStyles = styled.div`
  font-family: 'Spectral';

  display: flex;
  align-items: flex-end;
  color: ${primary.primary1};
  margin-bottom: 1rem;

  a {
    text-decoration: none;
  }
`;

export const AppName = styled.h1`
  ${leftColumn}
  font-size: 3.5rem;
  border-bottom: 1px solid ${tertiary.tertiary4};
  text-align: center;
`;

export const HeaderActions = styled.div`
  ${mainContent}
`;
