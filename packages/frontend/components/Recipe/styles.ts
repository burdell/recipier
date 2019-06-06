import styled from '@emotion/styled';
import { slate } from '../colors';

export const PageContainer = styled.div`
  display: flex;
`;

export const RecipeContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  flex: 9;
`;

export const RecipeActions = styled.div`
  width: 100%;
  flex: 1;
  margin-right: 6rem;

  button {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const Section = styled.div`
  margin-bottom: 1.5rem;

  ul,
  ol {
    padding-left: 4rem;
    line-height: 1.5;
  }
`;

export const SectionHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
