import styled from '@emotion/styled';

import { slate, lightBlue } from '../colors';

export const Button = styled.button`
  border: 0;
  background: none;
  box-shadow: none;
  border-radius: 3px;
  color: ${slate};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 0px 0px 1px rgba(227, 227, 227, 1);

  :focus {
    outline: none;
  }

  :hover {
    outline: none;
    background-color: ${lightBlue};
  }
`;
