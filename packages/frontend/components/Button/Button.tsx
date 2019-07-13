import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { primary, grays } from '../../design/colors';

export const BaseButton = css`
  border: 0;
  background: none;
  box-shadow: none;
  color: ${primary.primary1};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  padding: 0.5rem;
`;

export const Button = styled.button`
  ${BaseButton}
  border-radius: 5px;
  box-shadow: 0px 0px 0px 1px ${grays.gray7};

  :hover {
    box-shadow: 0px 0px 1px 1px ${primary.primary8};
  }

  :focus {
    outline: none;
    box-shadow: 0px 0px 1px 1px ${primary.primary4};
  }
`;
