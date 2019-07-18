import styled from '@emotion/styled';

import { grays } from '../../../design/colors';

export const Section = styled.div`
  border-radius: 10px;
  margin-bottom: 3rem;

  ol,
  li,
  ul {
    list-style: none;
    padding-left: 0.8rem;
  }
`;

export const SectionHeader = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${grays.gray8};
  color: ${grays.gray3};
  font-weight: lighter;
`;

export const ListNumber = styled.span`
  color: ${grays.gray3};
`;

export const SectionItem = styled.div`
  margin-bottom: 0.7rem;
  display: flex;
`;
