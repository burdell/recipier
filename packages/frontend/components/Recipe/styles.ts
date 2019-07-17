import styled from '@emotion/styled';

import { grays } from '../../design/colors';
import { leftColumn, mainContent } from '../Layout/styles';

export const RecipeContainer = styled.div`
  ${mainContent}
  max-width: 900px;
`;

export const RecipeActions = styled.div`
  ${leftColumn}
  width: 100%;
  margin-right: 0.5rem;
  background-color: ${grays.gray9};
  border: 1px solid ${grays.gray8};
  border-radius: 10px;
  padding: 1rem;

  button {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

export const Section = styled.div`
  border-radius: 10px;

  ol,
  li {
    list-style-position: inside;
    padding-left: 1.5rem;
  }
`;

export const SectionHeader = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const SectionItem = styled.div``;
