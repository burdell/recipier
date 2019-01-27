import styled from '@emotion/styled';

export const Button = styled.button`
  border: 0;
  background: none;
  box-shadow: none;
  border-radius: 5px;
  background-color: #2e4347;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :focus {
    outline: none;
  }

  :hover {
    box-shadow: 0px 0px 0px 1px rgba(227, 227, 227, 1);
    color: #eee9e5;
    outline: none;
  }
`;
