import styled from '@emotion/styled';
import css from '@emotion/css';
import { grays } from '../../design/colors';

export const LayoutStyles = styled.div``;

export const leftColumn = css`
  flex: 2;
  min-width: 200px;
  max-width: 200px;
`;

export const mainContent = css`
  flex: 12;
  width: 100%;
  padding-left: 1.5rem;
`;

export const BodyStyles = styled.div`
  font-family: Raleway;
  color: ${grays.gray1};
  display: flex;
`;
